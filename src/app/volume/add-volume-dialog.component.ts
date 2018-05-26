import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-volume-dialog',
  templateUrl: './add-volume-dialog.component.html',
  styleUrls: ['./add-volume-dialog.component.css']
})
export class AddVolumeDialogComponent implements OnInit {

  volumeName: String;
  volumeDurability: String;
  volumeSize: number;
  volumeReplicaNumber: number;

  constructor(
    public dialogRef: MatDialogRef<AddVolumeDialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  createVolume(){
    this.dialogRef.close();
  }

}
