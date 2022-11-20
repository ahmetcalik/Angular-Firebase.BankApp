import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { MusteriKayitComponent } from './musteri-kayit/musteri-kayit.component';
import { TeminatIslemleriComponent } from './teminat-islemleri/teminat-islemleri.component';
import { MessageComponent } from './POP-UPS/message/message.component';
import { OnayMessageComponent } from './POP-UPS/onay-message/onay-message.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ErrorMessageComponent } from './POP-UPS/error-message/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthComponent,
    HomeComponent,
    MusteriKayitComponent,
    TeminatIslemleriComponent,
    MessageComponent,
    OnayMessageComponent,
    ErrorMessageComponent,
  ] ,

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    BsDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    Ng2SearchPipeModule,


    RouterModule.forRoot([
      {path: 'musteri-kayit', component: MusteriKayitComponent},
      {path: 'teminat-islemleri', component: TeminatIslemleriComponent},
      {path: 'auth', component: AuthComponent},
      {path: 'home', component: HomeComponent},
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
