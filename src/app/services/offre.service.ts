import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offre } from '../classes/offre';

const URL="http://localhost:3000/offre";
@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor( private http:HttpClient) { }
  getDepensess():Observable<any>{
    return this.http.get<any>(URL);
  }
  addDepensess(d:Offre):Observable<Offre>{
    return this.http.post<Offre>(URL, d)
  }

  updateDepenses(id:number,d:Offre){
    return this.http.put<Offre>(URL+"/"+id ,d)
  }
  deleteDepenses(id : number){
    return this.http.delete(`${URL}/${id}`);
  }
}
