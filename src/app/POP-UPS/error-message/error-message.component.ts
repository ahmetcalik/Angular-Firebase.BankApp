import { Component, Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {  MatDialogRef,  MAT_DIALOG_DATA,  MatDialog,} from '@angular/material/dialog';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent  {

  constructor(private router: Router,
    private dialogRef: MatDialogRef<ErrorMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    

    public close() {
      this.dialogRef.close();
    }
    public yonlendir2(){
      this.router.navigate(['../','musteri-kayit']);
      this.dialogRef.close()
    }

  ngOnInit(): void {
  }

}
