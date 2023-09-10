import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HeaderComponent } from './pages/header/header.component';
// import { BarcodeInvalidsComponent } from './pages/barcodeInvalids/barcodeInvalids.component';
// import { HomeComponent } from './pages/home/home.component';
// import { DeclarativeBarcodeInvalidsComponent } from './pages/declarative-barcode-invalids/declarative-barcode-invalids.component';
// import { LoginComponent } from './pages/login/login.component';

// import { ManageComponent } from './pages/manage/manage.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { BarcodeInvalidsService } from './services/barcodeInvalid.service';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,

  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // ReactiveFormsModule ,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    // BarcodeInvalidsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
