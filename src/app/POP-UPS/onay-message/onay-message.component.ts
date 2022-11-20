import { Component, Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {  MatDialogRef,  MAT_DIALOG_DATA,  MatDialog,} from '@angular/material/dialog';

@Component({
  selector: 'app-onay-message',
  templateUrl: './onay-message.component.html',
  styleUrls: ['./onay-message.component.css']
})
export class OnayMessageComponent{

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<OnayMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
  
  public close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
