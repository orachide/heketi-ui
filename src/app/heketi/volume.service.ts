import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class VolumeService {

  constructor(private http: HttpClient) { }
  
    get(volumeId: string){
      return this.http.get<Node>(`/api/volumes/${volumeId}`,{})
    }

}
