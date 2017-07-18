import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http'

@Injectable()
export class PostServiceService {
  private postUrl = 'http://localhost:4000/api/posts/'
  constructor(private http: Http) { }
  retrieveAllPosts(){
    return this.http.get(this.postUrl)//.map((res:Response) => res.json())
  }
}
