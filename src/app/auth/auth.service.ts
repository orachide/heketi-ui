import { Cluster } from './../model/cluster';
import { Router } from '@angular/router';
import { ClusterService } from './../heketi/cluster.service';
import { Infra } from './../model/infra';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


export const HEKETI_UI_INFRA: string = 'heketi_ui_infra';

@Injectable()
export class AuthService {

  constructor(private clusterService: ClusterService,private http: HttpClient, private router: Router) { }

  login(infra: Infra){
    localStorage.setItem(HEKETI_UI_INFRA, JSON.stringify(infra));
    this.http.get<Array<Cluster>>(`${infra.serverUrl}/clusters`).subscribe(response=>{
      this.clusterService.clusters = response;
    },error=>{
      localStorage.removeItem(HEKETI_UI_INFRA);
      console.log(error);
    });

  }

  isLoggedIn(): boolean{
    return false;
  }
}
