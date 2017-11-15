import { HttpClient } from '@angular/common/http';
import { Cluster } from './../model/cluster';
import { ClusterService } from './../heketi/cluster.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(private clusterService: ClusterService,private http: HttpClient) { }

  ngOnInit() {
    
  }

}
