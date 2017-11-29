import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetPipe } from './greet.pipe'
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ GreetPipe ],
  exports: [ GreetPipe ]
})
export class SharedModule { }
