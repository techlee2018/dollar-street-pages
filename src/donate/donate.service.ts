import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Config } from '../app.config';

import 'rxjs/add/operator/map';

@Injectable()
export class DonateService {
  public window: Window = window;
  public http: Http;

  public constructor(@Inject(Http) http: Http) {
    this.http = http;
  }

  public showStripeDialog(config: any, cb: Function): void {
    let stripeHandler = (this.window as any).StripeCheckout.configure({
      key: Config.stripPublicKey,
      image: '/assets/img/dollar-street.svg',
      locale: 'auto',
      // tslint:disable-next-line
      token: (token: any) => {
        const query: any = { amount: config.amount, token: token };
        this.makeDonate(query).subscribe((res: any) => {
          console.log(res);
          if(!res.err) {
             cb();
          }
        });
      }
    });

    this.window.addEventListener('popstate', () => {
      stripeHandler.close();
    });

    stripeHandler.open(config);
  }

  public makeDonate(query: any): Observable<any> {
    return this.http.post(`${Config.api}/v1/donate`, query).map((res: any) => {
      let parseRes = JSON.parse(res._body);

      return parseRes;
    });
  }
}
