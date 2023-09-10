// import { DeclarativeBarcodeInvalidsComponent } from './pages/declarative-barcode-invalids/declarative-barcode-invalids.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { BarcodeInvalidsComponent } from './pages/barcodeInvalids/barcodeInvalids.component';
// import { HomeComponent } from './pages/home/home.component';
// import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
// import { ManageComponent } from './pages/manage/manage.component';


const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  // { path: '', component: HomeComponent},
  // { path: 'barcodeInvalids', component: BarcodeInvalidsComponent},
  // { path: 'declarativeBarcodeInvalids', component: DeclarativeBarcodeInvalidsComponent},
  // { path: '', redirectTo:'home', pathMatch: 'full'},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m=>m.LoginModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m=>m.ManageModule)
  },
  // {
  //   //子路由
  //   path: 'manage',
  //   component: ManageComponent,
  //   children: [
  //     { path: 'home', component: HomeComponent},
  //     { path: 'barcodeInvalids', component: BarcodeInvalidsComponent},
  //     { path: 'declarativeBarcodeInvalids', component: DeclarativeBarcodeInvalidsComponent},
  //     { path: '', redirectTo:'home', pathMatch: 'full'},
  //   ]
  // },
  { path: '', redirectTo:'login', pathMatch: 'full'},
  { path: '**', component: NotfoundComponent}
  // { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
