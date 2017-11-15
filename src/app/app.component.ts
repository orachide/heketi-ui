import { ClusterService } from './heketi/cluster.service';
import { Observer } from 'rxjs/Rx';
import { NextObserver } from 'rxjs/Observer';
import { EventManagerService, Event } from './shared/event-manager.service';
import { Cluster } from './model/cluster';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  clusters = [];

  constructor(private eventManagerService: EventManagerService,private clusterService: ClusterService){}

  ngOnInit() {
    this.eventManagerService.subscribe('clusters-lists', (event)=>{
      this.clusters = event.data;
    });
    this.clusterService.getAllClusters();
  }
}
