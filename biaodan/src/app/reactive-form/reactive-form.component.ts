import { Component, OnInit } from '@angular/core';
import { FormControlName, FormGroupName, FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

    formModel: FormGroup = new FormGroup({
        dateRange: new FormGroup({
          from: new FormControl(),
          to: new FormControl()
        }),
        emails: new FormArray([
          new FormControl('aaa@163.com'),
          new FormControl('bbb@163.com')
        ])
    });

  username: FormControl = new FormControl('aaa');

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formModel.value);
  }

  addEmail() {
    let emails = this.formModel.get('emails') as FormArray;
    emails.push(new FormControl());
  }

}
