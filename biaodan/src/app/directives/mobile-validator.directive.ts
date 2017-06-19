import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { mobileValidator } from '../validator/validators';

@Directive({
  selector: '[mobile]',
  providers: [{provide: NG_VALIDATORS, useValue: mobileValidator, multi: true}]
})
export class MobileValidatorDirective {

  constructor() { }

}

//指令是作为属性来用的
// NG_VALIDATORS是angular forms提供的常量
// useValue:校验器方法
// multi意思是一个NG_VALIDATORS的token下面可以挂多个值 如：mobileValidator 和 equalValidator
