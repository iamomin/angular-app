import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()

export class ApiService {

  constructor(private http: HttpClient) {
    console.log('IN API service constructor');
  }

  getPosts() {
    console.log('getPosts');
    let URL = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(URL)
  }

  getUsers() {
    console.log('getUsers');
    let URL = 'https://jsonplaceholder.typicode.com/users';
    this.http.get(URL).subscribe(data  => {
      console.log(data);
    });
  }

  getTimezone(lat: number, long: number) {
    console.log('getTimezone');
    lat = lat || 39.6034810;
    long = long || -119.6822510;
    let URL = 'https://maps.googleapis.com/maps/api/timezone/json?location=' + lat + ',' + long + '&timestamp=' + Date.now() + '&key=AIzaSyAplVQozgv8tuDYYY0Oz7Z3XoR2c4Q4Oso';
    this.http.get(URL).subscribe(data  => {
      console.log(data);
    });
  }

}