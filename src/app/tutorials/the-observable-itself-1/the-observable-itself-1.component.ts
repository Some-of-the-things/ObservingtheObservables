import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-the-observable-itself-1',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './the-observable-itself-1.component.html',
  styleUrl: './the-observable-itself-1.component.scss',
})
export class TheObservableItself1Component {
  tryToConnectWithJohnPromise(): void {
    console.log('start');
    const aPromise: Promise<string> = new Promise((resolve, reject) => {
      setTimeout(() => {
        const johnResponse = this.#johnConnect();
        if (johnResponse) {
          resolve('Hi John');
        } else {
          reject(new Error('Sorry, no John'));
        }
      }, 300);
    });
    aPromise.then(console.log);
    console.log('end');
  }

  tryToConnectWithJohnCallBack(): void {
    console.log('start');
    const aCallback: () => void = () => {
      setTimeout(() => {
        const johnsResponse = this.#johnConnect();
        if (johnsResponse) {
          console.log('Hi John');
        } else {
          throw new Error('Sorry, no John');
        }
      }, 300);
    };
    aCallback();
    console.log('end');
  }

  tryToConnectWithJohnAndJamesPromiseFail(): void {
    console.log('start');
    const aPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const johnsResponse = this.#johnConnect();
        if (johnsResponse) {
          resolve('Hi John');
        } else {
          reject(new Error('Sorry, no John'));
        }
      }, 300);
      setTimeout(() => {
        const jamesResponse = this.#jamesConnect();
        if (jamesResponse) {
          resolve('Hi James');
        } else {
          reject(new Error('Sorry, no James'));
        }
      }, 400);
    });
    aPromise.then(console.log);
    console.log('end');
  }

  tryToConnectWithJohnAndJamesPromiseSuccess(): void {
    console.log('start');
    this.tryToConnectWithJohnPromise();
    const aPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const jamesResponse = this.#jamesConnect();
        if (jamesResponse) {
          resolve('Hi James');
        } else {
          reject(new Error('Sorry, no James'));
        }
      }, 400);
    });
    aPromise.then(console.log);
    console.log('end');
  }

  tryToConnectWithJohnAndJamesObservable(): void {
    console.log('start');
    const connectObs: Observable<[NodeJS.Timeout, NodeJS.Timeout]> = of([
      setTimeout(() => {
        if (this.#johnConnect()) {
          console.log('Hi John');
        } else {
          throw new Error('Sorry, no John');
        }
      }, 300),
      setTimeout(() => {
        if (this.#johnConnect()) {
          console.log('Hi James');
        } else {
          throw new Error('Sorry, no James');
        }
      }, 300),
    ]);
    connectObs.subscribe();
    console.log('end');
  }

  #johnConnect(): boolean {
    /* Dev note: didn't have John's IP address so I just put in a random
       number generation script so it kinda seems like this works \-o-/ */
    return Boolean(Math.round(Math.random()));
  }

  #jamesConnect(): boolean {
    /* Dev note: no IP for James either but I know his connection is dodgy */
    return Boolean(Math.round(Math.random() * 0.75));
  }
}
