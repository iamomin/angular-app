import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FriendsComponent } from './friends.component';
import { FriendDetailComponent } from '../friend-detail/friend-detail.component'

const routes: Routes = [
  { path: 'friends', component: FriendsComponent },
  { path: 'detail/:id', component: FriendDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FriendsRoutingModule { }
