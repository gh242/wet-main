import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBarcodeInvalid } from '../@models/IBarcodeInvalid';
import { map, mergeMap } from 'rxjs';
import { User_tService } from './users_t.service';

@Injectable(
    {
        providedIn: 'root',
    }
)
export class BarcodeInvalidsService{
    baseUrl = 'https://localhost:5001/api/';
    
    constructor(private http: HttpClient, private user_tService: User_tService){}

    // getPosts(barcode:any){
    取到posts(){
        return this.http.get<{[id: string]: IBarcodeInvalid }>(
            // `https://localhost:5001/api/barcodeinvalids/${barcode}`
            `https://localhost:5001/api/barcodeinvalids/`
        ).pipe(map((posts) => {
            let postsData: IBarcodeInvalid[] = [];
            for(let id in posts){
                // console.log(id);
                postsData.push({...posts[id], id});
            }
            return postsData;
        }));
    }
    getPostWithUsers_t(){
        // debugger;
        // return this.getPosts('5-20230831-32598325FH-26N8C13AX8  -25').pipe(
        return this.取到posts().pipe(
            mergeMap((posts) => {
                return this.user_tService
                .getUsers_t()
                .pipe(map((users_t) => {
                    return posts.map(post => {
                        return {
                            ...post,
                            empName: users_t.find(user_t => user_t.empNo === post.empNo)
                            ?.empName,
                        }
                    });
                }));
            })
        );
    }
}