import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  friend: Friend;
  submitMessage: string;
  submitted = false;

  constructor() {
      this.submitMessage = 'Please confirm values before submit';
      this.friend = { id: 0, name: '' };
  }

  ngOnInit() {
  }

  onSubmit() {
      this.submitted = true;
  }
}
