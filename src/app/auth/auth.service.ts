import { EventManagerService } from './../shared/event-manager.service';
import { Cluster } from './../model/cluster';
import { Router } from '@angular/router';
import { ClusterService } from './../heketi/cluster.service';
import { Infra } from './../model/infra';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class AuthService {

  constructor(private clusterService: ClusterService,
    private http: HttpClient, private router: Router, private cookieService: CookieService) { }

  login(infra: Infra){
    this.http.post<Array<Cluster>>('/auth/login',{'user':infra.user,'secret':infra.secret}).subscribe(response=>{
      this.clusterService.getAllClusters();
      this.router.navigateByUrl('home');
    },error=>{
      console.log(error);
    });

  }

  isLoggedIn(): boolean{
    return this.cookieService.check('heketi_ui_sid');
  }
}
