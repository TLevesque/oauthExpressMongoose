import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Topic } from './topic-class';

@Injectable()
export class TopicApiServiceService {
  private baseURL: string = "http://localhost:3000/";

  constructor(private http: Http) { }

  getTopics(): Promise<Topic[]> {
    return this.http.get(`${this.baseURL}topics`)
      .toPromise()
      .then(response => {

        return response.json().map((topic) => {
          return Topic.parse(topic)
        })
      })
      .catch(this.handleError)
  }

  creatTopic(): Promise<Topic[]> {
    return this.http.get(`${this.baseURL}topics`)
      .toPromise()
      .then(response => {

        return response.json().map((topic) => {
          return Topic.parse(topic)
        })
      })
      .catch(this.handleError)
  }



  private handleError(error: any): Promise<any> {
    // debugger;
    console.error('An error occurred:', error.statusText);
    return Promise.reject(error.statusText || error);
  }

}
