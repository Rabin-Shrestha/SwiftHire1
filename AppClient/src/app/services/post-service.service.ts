import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http'

@Injectable()
export class PostServiceService {
  constructor(private http: Http) { }
  retrieveAllPosts(){
    //this.http.request('');
  }
}
