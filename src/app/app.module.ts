import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FriendsModule } from './friends/friends.module';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { ApiService } from './http/api.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FriendSearchComponent } from './friend-search/friend-search.component';
import { FormComponent } from './form/form.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { HighlightDirective } from './highlight.directive';
import { ForbiddenValidatorDirective } from './forbidden-name.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { SharedModule } from './shared/shared.module';
import { PostsComponent } from './posts/posts.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    DashboardComponent,
    FriendSearchComponent,
    FormComponent,
    VersionParentComponent,
    VersionChildComponent,
    HighlightDirective,
    ForbiddenValidatorDirective,
    ReactiveFormComponent,
    PostsComponent,
    HeaderComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    AppRoutingModule,

    FriendsModule,
    DynamicFormModule,

    HttpClientModule
  ],
  providers: [ MessageService, ApiService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
