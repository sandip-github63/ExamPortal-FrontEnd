import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import endPoint from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {


  constructor(private http:HttpClient) { }

  public categories(){

    return this.http.get(`${endPoint}/category/`);

  }

  public addCategory(category:any){

    return this.http.post(`${endPoint}/category/`,category);

  }


}
