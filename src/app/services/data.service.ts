import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
private _baseurl="http://apolis-grocery.herokuapp.com/api/"
private _categoryurl="category"
private _subcat="subcategory/"
  constructor(private http:HttpClient) { }
  getCategories(): Observable <any []>
  {
    return this.http.get<any []>(`${this._baseurl + this._categoryurl}` )


  }
  getSubCategory(catId){
    return this.http.get<any>(`${this._baseurl + this._subcat + catId}`)
  }
}
