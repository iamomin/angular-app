import { Component, OnInit, Input } from '@angular/core';
import { Friend } from '../friend';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FriendService }  from '../friend.service';

@Component({
  selector: 'app-friend-detail',
  templateUrl: './friend-detail.component.html',
  styleUrls: ['./friend-detail.component.css']
})

export class FriendDetailComponent implements OnInit {

  @Input() friend: Friend;

  constructor(
  private route: ActivatedRoute,
  private friendService: FriendService,
  private location: Location
  ) { }

    ngOnInit() {
        console.log('ngOnInit');
        this.getFriend();
    }

    getFriend(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.friendService.getFriend(id)
        .subscribe(friend => this.friend = friend);
    }

    goBack(): void {
      this.location.back();
    }

    save(): void {
     this.friendService.updateFriend(this.friend)
       .subscribe(() => this.goBack());
   }

    ngOnChanges(){
      console.log('ngOnChanges');
    }

    ngDoCheck() {
      console.log('ngDoCheck');
    }

    ngAfterContentInit() {
      console.log('ngAfterContentInit');
    }

    ngAfterContentChecked() {
      console.log('ngAfterContentChecked');
    }

    ngAfterViewInit() {
      console.log('ngAfterViewInit');
    }

    ngAfterViewChecked() {
      console.log('ngAfterViewChecked');
    }

    ngOnDestroy() {
      console.log('ngOnDestroy');
    }
}
