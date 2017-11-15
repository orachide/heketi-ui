import { Observable } from 'rxjs/Rx';
import { EventManagerService } from './../shared/event-manager.service';
import { JhiEventManager } from 'ng-jhipster';
import { HttpClient } from '@angular/common/http';
import { Cluster } from './../model/cluster';
import { Injectable } from '@angular/core';

@Injectable()
export class ClusterService {
  
  constructor(private http: HttpClient,private eventManagerService: EventManagerService) { }

  getAllClusters(){
    let response: Observable<Cluster[]> = this.http.get<Array<Cluster>>('/api/clusters',{})
    response.subscribe(response=>{
      this.eventManagerService.broadcast('clusters-lists', response);
    },error=>{
      console.log(error);
    });
    return response;
  }
}
