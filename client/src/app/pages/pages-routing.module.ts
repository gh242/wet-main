import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from '../pages/pages.component';
import { HomeComponent } from './home/home.component';
import { BarcodeInvalidsComponent } from './barcodeInvalids/barcodeInvalids.component';
import { DeclarativeBarcodeInvalidsComponent } from './declarative-barcode-invalids/declarative-barcode-invalids.component';

const routes: Routes = [
  {
    //子路由
    path: '',
    component: ManageComponent,
    children: [
      { path: 'home', component: HomeComponent},
      { path: 'barcodeInvalids', component: BarcodeInvalidsComponent},
      { path: 'declarativeBarcodeInvalids', component: DeclarativeBarcodeInvalidsComponent},
      { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
      { path: '', redirectTo:'home', pathMatch: 'full'},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
