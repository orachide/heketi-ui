import { Node } from './../model/node';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NodeService {

  constructor(private http: HttpClient) { }

  get(nodeId: string){
    return this.http.get<Node>(`/api/nodes/${nodeId}`,{})
  }

}
