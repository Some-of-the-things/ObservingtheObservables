import { TestScheduler } from 'rxjs/testing';
import { map, switchMap, exhaustMap, concatMap, mergeMap } from 'rxjs';

describe('Mapsandmarbles5', () => {
  let testScheduler: TestScheduler;

  beforeEach(async () => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  describe('map', () => {
    it('maps values', () => {
      testScheduler.run((helpers) => {
        const { cold, expectObservable } = helpers;
        const e1 = cold(' -a-----b---|');
        const expected = '-a-----b---|';
        const aCode = 'a'.charCodeAt(0);
        const bCode = 'b'.charCodeAt(0);
        const values = {
          a: aCode,
          b: bCode,
        };

        expectObservable(
          e1.pipe(map((x: string) => x.charCodeAt(0)))).toBe(expected, values);
      });
    });
  });

  describe('switchMap', () => {
    it('switches to new observable, cancelling previous one', () => {
      testScheduler.run((helpers) => {
        const { cold, expectObservable } = helpers;
        const firstMemoryOf = {
          a: 'Speaking words',
          b: 'Eating solids',
          c: 'Walking',
          d: 'Driving',
          e: 'Getting married'
        };

        const rebirths = cold('     -a--b---c--d-e|');
        const firstMemories = cold('abcde', firstMemoryOf);
        const expected = '          -abcabcdabcababcde';

        const lifeStream = rebirths.pipe(
          switchMap(() => firstMemories)
        );

        expectObservable(lifeStream).toBe(expected, firstMemoryOf);
      });
    });
  });

  describe('concatMap', () => {
    it('concatenates the observables, releasing all their values in order', () => {
      testScheduler.run((helpers) => {
        const { cold, expectObservable } = helpers;

        const catUpdates = {
          a: 'Meowing',
          b: 'Purring',
          c: 'Biting',
          d: 'Looking unimpressed',
          e: 'Pretending to want to go out',
        };

        const catWatchReportNotifications = cold('-a-b---c|');
        const tiddlesUpdates = cold('acccb|', catUpdates);
        const dumplingUpdates = cold('---ddd|', catUpdates);
        const felixUpdates = cold('-----dbace|', catUpdates);
        const expected = '-acccb---ddd-----dbace|';

        const catUpdater = getCatUpdate();

        const catObserver = catWatchReportNotifications.pipe(
          concatMap(() => catUpdater.next().value!)
        );

        expectObservable(catObserver).toBe(expected, catUpdates);

        function* getCatUpdate() {
          yield tiddlesUpdates;
          yield dumplingUpdates;
          yield felixUpdates;
        }
      });
    });
  });

  describe('mergeMap', () => {
    it('merges two observables into one', () => {
      testScheduler.run((helpers) => {
        const { cold, hot, expectObservable } = helpers;

        const motionScan = cold(  's---s');
        const legMovements = cold('ll-----l');
        const armMovements = hot(' --a-aa');
        const expected = 'll---a-l';

        const motionDetector = getMotion();

        const bodyMovements = motionScan.pipe(
          mergeMap(() => {
            return motionDetector.next().value!;
          }
        ));

        function* getMotion() {
          yield legMovements;
          yield armMovements;
        }

        expectObservable(bodyMovements).toBe(expected);
      });
    });
  });

  describe('exhaustMap', () => {
    it('waits for the previous Observable to complete before outputting values from the new one', () => {
      testScheduler.run((helpers) => {
        const { cold, hot, expectObservable } = helpers;

        const values = {
          a: 'salt',
          b: 'carrot',
          c: 'coriander',
          d: 'beef',
          e: 'stock',
        };

        const chef = cold('      cc------c');
        const soupRecipe = cold('a-c-b-e|', values);
        const beefRecipe = hot('-b---------d-a-b-c', values);
        const expected = '      a-c-b-e----d-a-b-c';

        const recipeStorage = getRecipe();

        const chefActions = chef.pipe(
          exhaustMap(() => {
            return recipeStorage.next().value!;
          })
        );

        function* getRecipe() {
          yield soupRecipe;
          yield beefRecipe;
        }

        expectObservable(chefActions).toBe(expected, values);
      });
    });
  });
});
