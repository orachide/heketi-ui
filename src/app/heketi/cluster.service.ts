import { Cluster } from './../model/cluster';
import { Injectable } from '@angular/core';

@Injectable()
export class ClusterService {

  clusters: Array<Cluster>;
  
  constructor() { }

}
