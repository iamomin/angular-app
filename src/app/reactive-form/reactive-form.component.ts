import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Friend, Address } from '../friend';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit {

  friendForm: FormGroup;
  states = ['CA', 'MD', 'OH', 'VA'];
  // friendForm = new FormGroup ({
  //   name: new FormControl()
  // });

  constructor(private fb: FormBuilder) {
      this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.friendForm = this.fb.group({
      name: ['',Validators.required],
      // address: this.fb.group({
      //   street: '',
      //   city: '',
      //   state: '',
      //   zip: ''
      // }),
      address: this.fb.group(new Address())
    });
  }
}
