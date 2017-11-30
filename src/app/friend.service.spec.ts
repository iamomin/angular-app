import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { FriendService } from './friend.service';
import { MessageService } from './message.service';

describe('FriendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ HttpClient, HttpHandler, MessageService, FriendService],

    });
  });

  it('should be created', inject([FriendService], (service: FriendService) => {
    expect(service).toBeTruthy();
  }));
});
