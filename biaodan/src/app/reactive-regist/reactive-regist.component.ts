import { Component, OnInit } from '@angular/core';
import { FormControlName, FormControl, FormGroup, FormArray, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { mobileValidator, mobileAsyncValidator, equalValidator } from '../validator/validators';
@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {

  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],        //该数组里面第一个参数是 默认值，第二个是 校验器
      mobile: ['', mobileValidator, mobileAsyncValidator],                   //异步校验器
      passwordsGroup: fb.group({
         password: ['', Validators.minLength(6)],
         pconfirm: ['']
      }, {validator: equalValidator})
    })
   }

  ngOnInit() {
  }

  onSubmit() {
    // let isValid: boolean = this.formModel.get('username').valid;    //当符合校验规则的时候，这个属性就是 true
    // console.log("username的校验结果："+ isValid);
    // let errors: any = this.formModel.get('username').errors;
    // console.log("username的错误信息是："+ JSON.stringify(errors));
    if(this.formModel.valid) {
        console.log(this.formModel.value);
    }
  }

}
