import { Component, OnInit } from '@angular/core';
import { ApiService } from '../http/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;

  constructor(private api: ApiService) {
    console.log('in version-parent constructor');
  }

  ngOnInit(): void {
    this.api.getPosts().subscribe(data => {
      this.posts = data;
      console.log(this.posts);
    });
  }
}