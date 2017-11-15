import { Node } from './../model/node';
import { ActivatedRoute } from '@angular/router';
import { NodeService } from './../heketi/node.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NodeComponent implements OnInit {

  nodeId: string;
  node: Node;

  constructor(private nodeService: NodeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .filter(params => params.nodeId)
    .subscribe(params => {
      this.nodeId = params.nodeId;
      this.nodeService.get(this.nodeId)
        .subscribe(response=> {
          this.node = response;
        })
    });
  }
}
