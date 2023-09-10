import { map } from 'rxjs/operators';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { BarcodeInvalidsService } from 'src/app/@services/barcodeInvalid.service';
import { IBarcodeInvalid } from '../../@models/IBarcodeInvalid';
import { Subscription, interval } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
// import { image } from './image.const';

@Component({
  selector: 'app-barcodeInvalids',
  templateUrl: './barcodeInvalids.component.html',
  styleUrls: ['./barcodeInvalids.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [BarcodeInvalidsService]
})
export class BarcodeInvalidsComponent implements OnInit, OnDestroy {
  posts: IBarcodeInvalid[] = [];
  // intervalSubscription!: Subscription;
  postsSubscription!: Subscription;
  imageSource: any;
  current_date:any;
  selectedImg: any;
  empNo?: string;
  scrollTopVal: any;

  selectedHero: any;
  onSelect(hero: any): void {
    // debugger;
    this.selectedHero = hero;
    console.log(this.selectedHero);
    this.selectedImg = this.selectedHero.snapShot;
    // this.ss.style.width="500px";
    console.log(this.selectedHero.snapShot);

    var box = document.getElementById("box");
    if(box)
    {
      // box.style.top  = document.body.scrollTop+150 + "px";
      box.style.top  = this.scrollTopVal+150 + "px";
      box.style.left = "40px";
      // box.style.boxShadow = "2px 2px 2px rgba(20%,20%,40%,0.6),4px 4px 6px rgba(20%,20%,40%,0.4),6px 6px 12px rgba(20%,20%,40%,0.4);"
    }
  }

  constructor(private postService: BarcodeInvalidsService, private sanitizer: DomSanitizer,
    private ref: ChangeDetectorRef
  ){}
  
  ngOnInit(): void{
    this.empNo = '1111';
    this.getBarcodeInvalids();
    // this.getBarcodeInvalids().map((post) => {
    //   return this.posts.filter(
    //     (post) => post.empNo === this.empNo
    //   )
    // });

    // window.addEventListener("scroll", function(){
    //   // yy = this.scrollY;
    // })
    window.addEventListener('scroll', this.scrollEvent, true);
  }

  getBarcodeInvalids(){
        // this.intervalSubscription = interval(1000).subscribe({
        //   next: (data) => { console.log(data);},
        //   error: (error) => console.log(error),
        //   complete: () => console.log("complete Interval")         
        // })

        this.postsSubscription = this.postService
          // .getPosts('5-20230831-32598325FH-26N8C13AX8  -25') 
          // .getPosts('5-20230818-KX1Q0817FK-2YN8C16D08  -25') 
          // .getPosts() 
          .取到posts() 
          // .getPostWithUsers_t()
          .subscribe({
          next:(data) => {
            for(var i = 0; i < data.length; i++)
            {
              this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${data[i].snapShot}`); 
              data[i].snapShot = this.imageSource;
              // data[i].id = (parseInt((data[i].id))+1).toString();
      
              // var _stamp = new Date(data[i].stamp);
              // var result_stamp = this.getCurrentDate(_stamp);
              // // console.log(result_stamp);
              // data[i].realdateTime = result_stamp;
            }
            console.log(data);
            this.posts = data;
            this.ref.detectChanges();
            // this.ref.markForCheck();
          },
          error: (error) => console.log(error),
          complete: () => console.log("complete http call")    
        });
  }
  // getCurrentDate(current_date:Date){
  //   var year = current_date.getFullYear();
  //   var month = (current_date.getMonth()+1).toString().padStart(2, '0');
  //   var day = current_date.getDate().toString().padStart(2, '0');
  //   var hh = current_date.getHours();
  //   var mm = current_date.getMinutes();
  //   var ss = current_date.getSeconds();
  //   var sss = current_date.getMilliseconds();
  //   var result = year.toString()+'-'+month.toString()+'-'+day.toString()
  //   +' '+hh.toString()+':'+mm.toString()+':'+ss.toString()+':'+sss.toString();
  //   return result
  // }

  ngOnDestroy(){
    // this.intervalSubscription && this.intervalSubscription.unsubscribe();
    this.postsSubscription && this.postsSubscription.unsubscribe();
    window.removeEventListener('scroll', this.scrollEvent, true);
  }

  scrollEvent = (event: any): void => {
    // const scrollTopVal = event.target.scrollingElement.scrollTop;
    this.scrollTopVal = event.target.scrollingElement.scrollTop;
    console.log("this.scrollTopVal=", this.scrollTopVal);
  }
}
