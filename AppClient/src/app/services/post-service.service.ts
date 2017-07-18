import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class PostServiceService {
  constructor(private http: Http) { }

  //get All posts service
  getAllPosts() {
    return this.http.get('http://localhost:4000/api/posts').map((data: Response) => data.json());
  }

  //My own job post
  getAllUserPosts(username) {
    return this.http.get('http://localhost:4000/api/posts/' + username);
  }

  //My own activities
  getUserActivities(username) {
    return this.http.get('http://localhost:4000/api/posts/activities/' + username);
  }
}
