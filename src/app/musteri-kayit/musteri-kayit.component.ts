import { Component, OnInit } from '@angular/core';
import { MusteriBilgi } from '../classes/musteri-bilgileri.model';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { MatDialog } from  '@angular/material/dialog';
import { MessageComponent } from '../POP-UPS/message/message.component';


@Component({
  selector: 'app-musteri-kayit',
  templateUrl: './musteri-kayit.component.html',
  styleUrls: ['./musteri-kayit.component.css'],
})
export class MusteriKayitComponent implements OnInit {
  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private authService: AuthService,
    private  dialog:  MatDialog,
  ) {}

  private userSub: Subscription = new Subscription();
  public Musteri: MusteriBilgi = new MusteriBilgi();

  isAuthenticated = false;

  itemMusteri = new MusteriBilgi();

  codeGenerated = '';
  randomString() {
    const chars = '123456789';
    const stringLength = 12;
    let randomstring = '';
    for (let i = 0; i < stringLength; i++) {
      const rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
    this.codeGenerated = randomstring;
    return 0;
  }

  addItemMusteri(musteri: MusteriBilgi) {
    this.itemMusteri = musteri;
  }

  tcControl(musteriForm: NgForm) {
    if (musteriForm.valid) {
      this.httpClient
        .get(
          'https://angular-bank-app-default-rtdb.firebaseio.com/Musteri_Bilgileri/' + this.Musteri.Tc + '.json')
        .subscribe((response: any) => {
          if (response == null) {
            this.randomString();
            this.Musteri.No = this.codeGenerated;

            this.httpClient
              .patch(
                'https://angular-bank-app-default-rtdb.firebaseio.com/Musteri_Bilgileri/' + this.Musteri.Tc + '.json', this.Musteri)
              .subscribe((users) => {
                console.log(users);
              });
          }else{
            this.dialog.open(MessageComponent,{ data: {
              message:  "Error!!!"
              }});
          }
        });
    }
  }
  temizle(musteriForm: NgForm){
    musteriForm.reset();
    this.Musteri.No=null;
  }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
