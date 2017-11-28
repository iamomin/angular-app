import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {

  constructor(private fb: FormBuilder) { }

  toFormGroup(questions: QuestionBase<any>[] ) {
    let group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
/* ALTERNATE WAY TO CREATE GROUP */
/*
    questions.forEach(question => {
      group[question.key] = [question.value || '', Validators.required]
    });
    return this.fb.group(group);
*/
  }
}
