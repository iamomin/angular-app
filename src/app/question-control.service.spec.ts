import { TestBed, inject } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { QuestionControlService } from './question-control.service';

describe('QuestionControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ FormBuilder, QuestionControlService ]
    });
  });

  it('should be created', inject([QuestionControlService], (service: QuestionControlService) => {
    expect(service).toBeTruthy();
  }));
});
