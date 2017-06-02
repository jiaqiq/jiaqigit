import { CanActivate } from "@angular/router";

export class LoginGuard implements CanActivate {
    // 路由守卫：当满足某些条件的时候才能进入相关页面
   canActivate() {

       let loggedIn: boolean = Math.random() < 0.5;

       if(!loggedIn) {
           console.log("用户未登录");
       }

       return loggedIn;
   }
}