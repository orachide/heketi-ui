import { ClusterService } from './heketi/cluster.service';
import { Observer } from 'rxjs/Rx';
import { NextObserver } from 'rxjs/Observer';
import { EventManagerService, Event } from './shared/event-manager.service';
import { Cluster } from './model/cluster';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { VolumeComponent } from './volume/volume.component';
import { AddVolumeDialogComponent } from './volume/add-volume-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  clusters = [];

  constructor(
    private eventManagerService: EventManagerService,
    private clusterService: ClusterService,
    public dialog: MatDialog){}

  ngOnInit() {
    this.eventManagerService.subscribe('clusters-lists', (event)=>{
      this.clusters = event.data;
    });
    this.clusterService.getAllClusters();
  }

  openVolumeDialog(){
    console.log("Add volume");
    let addNodeDialogRef = this.dialog.open(AddVolumeDialogComponent, {
      
    });

    addNodeDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
