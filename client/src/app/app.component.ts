import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { map,first } from 'rxjs';
// import { image } from './image.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hello!!!!';
  bs: any;
  bb: any;
  imageSource: any;

  constructor(private http:HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // this.http.get('https://localhost:5001/api/barcodeinvalids/1111').subscribe({
    //   next: response => {
    //     //debugger
    //     // this.bs = response
    //     this.bs = response.
    //     // this.bb = response.propertyIsEnumerable.arguments,
    //     // this.bb = response.
    //     // this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${response['1'].snapShot}`);
    //   },
    //   error: error => console.log(error),
    //   complete: () => console.log('Request has completed')
    // })
    // this.bs
    // debugger;
  }

}
