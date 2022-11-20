import { Component, Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {  MatDialogRef,  MAT_DIALOG_DATA,  MatDialog,} from '@angular/material/dialog';

@Component({
  templateUrl: 'message.component.html',
})
export class MessageComponent {
  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<MessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public close() {
    this.dialogRef.close();
  }
  public yonlendir(){
    this.router.navigate(['../','teminat-islemleri']);
    this.dialogRef.close()
  }
  
}
