import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/observable';
import {Patients} from '../models/patients.model';
import { User } from '../models/User';
import { QueryModel } from '../models/queryModel';
import 'rxjs/add/operator/map';


@Injectable()
export class PatientdataService {
  /* tslint:disable */
  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';
 

  constructor(private http: HttpClient, private _http:Http) { }

  getUser(): Observable<Patients[]> {
    return this.http.get<Patients[]>(this.serviceUrl);
  }

  getAllPatients(): Observable<Patients[]>{
    return this.http.get<Patients[]>('/api/getAllPatients')
  }

  addpatient(user: User){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log('enetred insert user');
    return this._http.post('/api/addUser', JSON.stringify(user), options);

  }

  queryToMongodb(queryModel : QueryModel){

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let params = new HttpParams()
      .set("queryData", JSON.stringify(queryModel) ); //Create new HttpParams
    console.log('enetred insert user');
    return this._http.get('/api/getSpecifiedRecords', { headers: headers, params: params }).map(
      result => result.json()
    )
     
  }

  



}
