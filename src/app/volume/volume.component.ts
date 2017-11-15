import { VolumeService } from './../heketi/volume.service';
import { Volume } from './../model/volume';
import { ActivatedRoute } from '@angular/router';
import { NodeService } from './../heketi/node.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VolumeComponent implements OnInit {

  volumeId: string;
  volume: Volume;

  constructor(private volumeService: VolumeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .filter(params => params.volumeId)
    .subscribe(params => {
      this.volumeId = params.volumeId;
      this.volumeService.get(this.volumeId)
        .subscribe(response=> {
          this.volume = response;
        })
    });
  }

}
