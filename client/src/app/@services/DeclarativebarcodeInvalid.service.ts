import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBarcodeInvalid } from '../@models/IBarcodeInvalid';
import { map } from 'rxjs/operators';
import { DeclarativeUser_tService } from './DeclarativeUser_t.service';
import { combineLatest } from 'rxjs';
import { IUser_t } from '../@models/IUser_t';

@Injectable({
  providedIn: 'root',
})
export class DeclarativeBarcodeInvalidService {
  baseUrl = 'https://localhost:5001/api/';
  posts$ = this.http
    .get<{ [id: string]: IBarcodeInvalid }>(
      'https://localhost:5001/api/barcodeinvalids'
    ).pipe(
      map((posts) => {
        let postsData: IBarcodeInvalid[] = [];
        for (let id in posts) {
          // console.log(id);
          postsData.push({ ...posts[id], id });
        }
        return postsData;
      })
    );

  postsWithUser_t$ = combineLatest([
      this.posts$, 
      this.user_tService.users_t$
    ]).pipe(map(([posts, users_t]) => {
      return posts.map(post => {
        // console.log('post=',post);
        // console.log('users_t=',users_t);
        return {
          ...post,
          empName: users_t.find(
            (user_t) => user_t.empNo === post.empNo
          )?.empName
        // } as IUser_t;
        };
      })
    }));


  constructor(
    private http: HttpClient,
    private user_tService: DeclarativeUser_tService
  ) { }


}