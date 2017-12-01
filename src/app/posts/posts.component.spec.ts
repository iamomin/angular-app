import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { PostsComponent } from './posts.component';
import { ApiService } from '../http/api.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsComponent ],
      providers: [ HttpClient, HttpHandler, ApiService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
*/
});
