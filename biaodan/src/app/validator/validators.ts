import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

//校验器
  // XXXXX(control: AbstractControl): {[key: string]: any} {
  //   return null;
  // }

  export function mobileValidator(control: FormControl): any {
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    let valid = myreg.test(control.value);
    console.log("mobile的校验结果是："+ valid);
    return valid ? null : {mobile : true};    //校验通过返回null，没有通过返回一个对象
  }  

//异步校验器  可以调用远程的服务  返回的不是一个对象，而是一个可观测的流
    export function mobileAsyncValidator(control: FormControl): any {
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    let valid = myreg.test(control.value);
    console.log("mobile的校验结果是："+ valid);
    return Observable.of(valid ? null : {mobile : true}).delay(5000);    //校验通过返回null，没有通过返回一个对象
   } 

  export function equalValidator(group: FormGroup) : any {
    let password: FormControl = group.get('password') as FormControl;
    let pconfirm: FormControl = group.get('pconfirm') as FormControl;
    let valid: boolean = (password.value === pconfirm.value);
    console.log("密码校验结果是"+ valid);
    return valid ? null : {equal : {desc:"密码和确认密码不匹配"}};
  }
