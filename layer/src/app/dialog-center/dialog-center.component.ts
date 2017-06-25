import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { Selected } from '../tree/tree.component';

import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-dialog-center',
  templateUrl: './dialog-center.component.html',
  styleUrls: ['./dialog-center.component.css']
})
export class DialogCenterComponent implements OnInit {

   employees: Array<Employee>;
  //  employees: Employee[];

   @Input()
   selected: Selected;

  constructor(private http: Http) { }

  ngOnInit() {
    // this.employees = [
    //    new Employee(1, '张三1', 20, '男'),
    //    new Employee(2, '李四1', 25, '女'),
    //    new Employee(3, '王五1', 28, '男'),
    //    new Employee(4, '赵六1', 30, '女')
    // ];

    this.getEmployees().then(employees => this.employees = employees);

  }

    getEmployees() {
        let url = '../assets/mock_data/employees.json';
        return this.http.get(url)
            .toPromise()
            .then(res => <Employee[]> res.json().data);
    }

}

export class Employee {

  constructor(
    public id: number,
    public name: string,
    public age: number,
    public gender: string
  ) {

  }
}
