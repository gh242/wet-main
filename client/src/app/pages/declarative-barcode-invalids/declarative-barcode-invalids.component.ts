import { User_tService } from '../../@services/users_t.service';
// import { PostService } from 'src/app/services/barcodeInvalid.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DeclarativeBarcodeInvalidService } from 'src/app/@services/DeclarativebarcodeInvalid.service';
import { map } from 'rxjs';
import { DeclarativeUser_tService } from 'src/app/@services/DeclarativeUser_t.service';

@Component({
  selector: 'app-declarative-barcode-invalids',
  templateUrl: './declarative-barcode-invalids.component.html',
  styleUrls: ['./declarative-barcode-invalids.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeclarativeBarcodeInvalidsComponent {
  // post$ = this.postService.posts$;
  posts$ = this.postService.postsWithUser_t$;
  selectedEmpNo = '';
  users_t$ = this.User_tService.users_t$;

  filteredPosts$ = this.posts$.pipe(
    map((posts) => {
      return posts.filter((post) => 
        this.selectedEmpNo?
          post.empNo === this.selectedEmpNo
          : true
      );
    })
  )

  constructor(
    private postService: DeclarativeBarcodeInvalidService,
    private User_tService: DeclarativeUser_tService
  ){}

  onEmpNoChange(event: Event){
    let selectedEmpNo = (event.target as HTMLSelectElement).value;
    this.selectedEmpNo = selectedEmpNo;
  }
}
