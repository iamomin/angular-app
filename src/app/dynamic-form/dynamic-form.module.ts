import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { DynamicFormRoutingModule } from './dynamic-form-routing.module';
import { DynamicFormQuestionComponent } from '../dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './dynamic-form.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormRoutingModule
  ],
  declarations: [
    DynamicFormQuestionComponent,
    DynamicFormComponent
  ]
})

export class DynamicFormModule { }
