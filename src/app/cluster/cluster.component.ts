import { Cluster } from './../model/cluster';
import { ClusterService } from './../heketi/cluster.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClusterComponent implements OnInit {

  clusterId: string;
  cluster: Cluster;

  constructor(private clusterService: ClusterService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .filter(params => params.clusterId)
    .subscribe(params => {
      this.clusterId = params.clusterId;
      this.clusterService.get(this.clusterId)
        .subscribe(response=> {
          this.cluster = response;
        })
    });
  }
}
