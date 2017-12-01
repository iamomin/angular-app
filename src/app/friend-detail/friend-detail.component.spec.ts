import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClient, HttpHandler } from '@angular/common/http';

import { FriendDetailComponent } from './friend-detail.component';
import { SharedModule } from '../shared/shared.module';
import { FriendService } from '../friend.service';
import { MessageService } from '../message.service';

describe('FriendDetailComponent', () => {
  let component: FriendDetailComponent;
  let fixture: ComponentFixture<FriendDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendDetailComponent ],
      imports: [ FormsModule, SharedModule, RouterTestingModule.withRoutes([]) ],
      providers: [ FriendService, MessageService, HttpClient, HttpHandler ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
