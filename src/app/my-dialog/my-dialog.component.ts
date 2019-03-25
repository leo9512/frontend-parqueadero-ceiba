import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {

  constructor(public dialog:MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA)public data:any) { }

  ngOnInit() {
  }

  onNoClick():void{
    this.dialog.close();
  }

}
