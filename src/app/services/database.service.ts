import { Injectable, Input } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { map } from "rxjs/operators";

 @Injectable()
 export class DatabaseService {

   private API_URL = 'https://yf02jtgzqj.execute-api.us-east-1.amazonaws.com/dev/form/';

   constructor(private http: Http) { }

   createPatient(name, birthdate, city, zipCode, street, phone, checks) {
     let headers = new Headers({'Content-Type' : 'application/json'});
     let options = new RequestOptions({ headers: headers});
     let INFO =  Object.assign(name, birthdate, city, zipCode, street, phone, checks);
     let body = JSON.stringify(INFO);
     return this.http.post(this.API_URL, body, options).pipe(map((res: Response) => res.json()));
   }

   getInfo(id: string){
     return this.http.get(this.API_URL + id).pipe(map((response: any) => response.json()));
   }

 }
