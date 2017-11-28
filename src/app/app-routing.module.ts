import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsComponent }     from './friends/friends.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { FriendDetailComponent }  from './friend-detail/friend-detail.component';
import { FormComponent }     from './form/form.component';
import { ReactiveFormComponent }     from './reactive-form/reactive-form.component';
import { DynamicFormComponent }     from './dynamic-form/dynamic-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'detail/:id', component: FriendDetailComponent },
  { path: 'form', component: FormComponent },
  { path: 'reactiveform', component: ReactiveFormComponent },
  { path: 'dynamicform', component: DynamicFormComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
