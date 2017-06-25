import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {TreeModule, TreeNode} from 'primeng/primeng';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

  @Injectable()
export class TreeService {

    constructor(private http: Http) { }

    getFiles() {
        return this.http.get('../assets/mock_data/trees2.json')
               .toPromise()
               .then(res => <TreeNode[]> res.json().data);
    }

}
