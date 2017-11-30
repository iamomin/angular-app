import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FriendsRoutingModule } from './friends-routing.module';
import { FriendsComponent }     from './friends.component';
import { FriendDetailComponent }  from '../friend-detail/friend-detail.component';
import { FriendService } from '../friend.service';

import { SharedModule } from '../shared/shared.module';

// import { HttpClientModule } from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from '../in-memory-data.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    FriendsRoutingModule,

    // HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    //   )
  ],
  declarations: [
    FriendsComponent,
    FriendDetailComponent
  ],
  providers: [ FriendService ]
})
export class FriendsModule { }
