import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { formControlBinding } from '@angular/forms/src/directives/ng_model';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  isValidFormSubmitted: boolean = null;
  userForm = new FormGroup({
    uname: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    married: new FormControl(false),
    tc: new FormControl('', Validators.required)
  });

  constructor() { }
  onFormSubmit() {
    this.isValidFormSubmitted = false;
    if(this.userForm.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    console.log(this.userForm.valid);
  }
  reset() {
    this.userForm.reset({
      married : false
    });
  }
  setDefaultValues() {
    this.userForm.patchValue({uname: 'Krishna',
  gender:'male',married:'true'});
  }

  ngOnInit() {
  }

}
