import { Component, OnInit } from '@angular/core';
import { ApiService } from '../http/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor(private api: ApiService) {
    console.log('in version-parent constructor');
  }

  ngOnInit(): void {
    this.api.getPosts().subscribe(data  => {
      this.posts = data;
      console.log(this.posts);
    });
  }
}

export interface Post {
  id: number,
  title: string,
  body: string
}