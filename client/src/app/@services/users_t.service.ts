import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUser_t } from "../@models/IUser_t";
import { map, mergeMap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class User_tService {
    
    constructor(private http: HttpClient){

    }

    getUsers_t(){
        return this.http
        .get<{[id: string]: IUser_t }>(
            'https://localhost:5001/api/users_t'
        )
        .pipe(map((users_t) => {
            let usersData: IUser_t[] = [];
            for(let id in users_t){
                // console.log(id);
                usersData.push({...users_t[id], id});
            }
            console.log("usersData=",usersData);
            
            return usersData;
            })
        );
    }


}