import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs';

@Injectable()

export class ContactService {
  private contactUrl = 'http://localhost:3000/messages';  // URL to web API
  constructor (private http: Http) {}
  postMsg (data): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    return this.http.post(this.contactUrl, JSON.stringify(data.value), {headers: headers})
      .map((res:Response) => {
        let data = res.json().data;
        return data;
      })
      .catch((error:any) => {
        return Observable.throw(error);
      });
                    // .catch(this.handleError);
  }

  // private handleError (error: Response | any) {
  //   // In a real world app, we might use a remote logging infrastructure
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const body = error.json() || '';
  //     const err = body.error || JSON.stringify(body);
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }
}
