import { Component, OnInit } from '@angular/core';
import { TeminatBilgi } from '../classes/teminat-bilgileri.model';
import { tumBilgi } from '../classes/tum-bilgiler.model'
import { MusteriBilgi } from '../classes/musteri-bilgileri.model'
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { MatDialog } from  '@angular/material/dialog';
import { OnayMessageComponent } from '../POP-UPS/onay-message/onay-message.component';
import { ErrorMessageComponent } from '../POP-UPS/error-message/error-message.component';


@Component({
  selector: 'app-teminat-islemleri',
  templateUrl: './teminat-islemleri.component.html',
  styleUrls: ['./teminat-islemleri.component.css'],
})
export class TeminatIslemleriComponent implements OnInit {
  constructor( private  dialog:  MatDialog, private router: Router, private httpClient: HttpClient, private authService: AuthService ) {}

  isAuthenticated = false;
  private userSub: Subscription = new Subscription();
  public Teminat: TeminatBilgi = new TeminatBilgi();

  public TeminatBilgileri: TeminatBilgi[] = [];
  public MusteriBilgileri: MusteriBilgi[] = [];
  public TumBilgiler: tumBilgi[] = [];

  musteriBilgileri= new MusteriBilgi();
  FormControl = new FormControl('');
  itemTeminat = new TeminatBilgi();

  filterTerm!: string;

  addTeminat(teminat: TeminatBilgi) {
    this.itemTeminat = teminat;
  }


  //ARALIKTA Kİ KODLAR MÜŞTERİ ARAMA İÇİN
  musteriGetir(mGetir: NgForm) {
    this.httpClient
      .get(
        'https://angular-bank-app-default-rtdb.firebaseio.com/Musteri_Bilgileri/' + this.FormControl.value + '.json' )
      .subscribe(response => {
        console.log(this.FormControl.value)
        if (response == null) {
          this.dialog.open(ErrorMessageComponent,{ data: {
            message:  "Error!!!"
            }});
        }
      }
    );

  }

  musteriList() {

    this.httpClient
      .get(
        'https://angular-bank-app-default-rtdb.firebaseio.com/Musteri_Bilgileri/' + this.FormControl.value + '.json' )
      .subscribe((item: any) => {
        this.musteriBilgileri.Adi =item._adi;
        this.musteriBilgileri.Soyadi=item._soyadi;
        this.musteriBilgileri.Tc=item._tc;
        this.musteriBilgileri.No=item._no;
      });
  }
    //----------------------------------------------------------------------------------------------------------------------------------



  //ARALIKTA Kİ KODLAR TEMİNAT KAYIT İÇİN
  teminatKayit(teminatForm: NgForm) {
    this.httpClient
      .post(
        'https://angular-bank-app-default-rtdb.firebaseio.com/Teminat_Bilgileri/' +
          this.FormControl.value +
          '.json',
        teminatForm.value
      )
      .subscribe((response) => {
        console.log(response);
        teminatForm.reset();
      });

      this.dialog.open(OnayMessageComponent,{ data: {
        message:  "Error!!!"
        }});
  }
    //----------------------------------------------------------------------------------------------------------------------------------


  //ARALIKTA Kİ KODLAR TEMİNAT LİSTELEME İÇİN
  bilgiList() {

    this.httpClient.get('https://angular-bank-app-default-rtdb.firebaseio.com/Musteri_Bilgileri/' + this.FormControl.value + '.json')
      .subscribe(
        (item: any) => {
            var musteri = new MusteriBilgi();
            musteri.Adi=item._adi;
            musteri.Soyadi=item._soyadi;
            musteri.Tc=item._tc;
            musteri.No=item._no;

          this.httpClient.get('https://angular-bank-app-default-rtdb.firebaseio.com/Teminat_Bilgileri/' + this.FormControl.value + '.json')
          .subscribe(
            (list: any) => {
              var bb  = Object.keys(list).map(key=> ({ teminat: list[key] }));
              this.TumBilgiler = [];
              bb.forEach((item2:any) => {
                var tumbilgilocal = new tumBilgi();
                tumbilgilocal.tAdi=musteri.Adi;
                tumbilgilocal.tSoyadi=musteri.Soyadi;
                tumbilgilocal.tTc=musteri.Tc;
                tumbilgilocal.tNo=musteri.No;
                tumbilgilocal.tKalite=item2.teminat.Kalite
                tumbilgilocal.tOnayNo=item2.teminat.OnayNo
                tumbilgilocal.tTarih=item2.teminat.Tarih

                if (item2.teminat.Turu == 101) { tumbilgilocal.tTuru="Sözleşme/Şahsi Taahhüt" }
                if (item2.teminat.Turu == 201) { tumbilgilocal.tTuru="Ortak Kefaleti" }
                if (item2.teminat.Turu == 301) { tumbilgilocal.tTuru="3. Şahıs Kefaleti" } 
                if (item2.teminat.Turu == 401) { tumbilgilocal.tTuru="Araç Rehni" } 
                if (item2.teminat.Turu == 601) { tumbilgilocal.tTuru="Senet" } 
                if (item2.teminat.Turu == 602) { tumbilgilocal.tTuru="Sözleşme/Şahsi Taahhüt" }
                if (item2.teminat.Turu == 706) { tumbilgilocal.tTuru="KGF Hazine PLS" } 
                if (item2.teminat.Turu == 707) { tumbilgilocal.tTuru="KGF Hazine PGS" } 
                if (item2.teminat.Turu == 801) { tumbilgilocal.tTuru="Mevduat Rehni" }                 
                
                this.TumBilgiler.push(tumbilgilocal);
                console.log(this.TumBilgiler)
              });
            }
          );

        }
      );

  }
  //----------------------------------------------------------------------------------------------------------------------------------



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
