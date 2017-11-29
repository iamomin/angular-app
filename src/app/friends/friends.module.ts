import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FriendsRoutingModule } from './friends-routing.module';
import { FriendsComponent }     from './friends.component';
import { FriendDetailComponent }  from '../friend-detail/friend-detail.component';
import { FriendService } from '../friend.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    FriendsRoutingModule
  ],
  declarations: [
    FriendsComponent,
    FriendDetailComponent
  ],
  providers: [ FriendService ]
})
export class FriendsModule { }
