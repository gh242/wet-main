import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './pages-routing.module';
import { HeaderComponent } from '../pages/header/header.component';
import { BarcodeInvalidsComponent } from '../pages/barcodeInvalids/barcodeInvalids.component';
import { HomeComponent } from '../pages/home/home.component';
import { DeclarativeBarcodeInvalidsComponent } from '../pages/declarative-barcode-invalids/declarative-barcode-invalids.component';
import { ManageComponent } from '../pages/pages.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    BarcodeInvalidsComponent,
    HomeComponent,
    DeclarativeBarcodeInvalidsComponent,
    // LoginComponent,
    ManageComponent,
  ],
  imports: [
    CommonModule,
    ManageRoutingModule,
    FormsModule
  ]
})
export class ManageModule { }
