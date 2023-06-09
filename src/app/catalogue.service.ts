import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  public host:String = "http://localhost:8080"

  constructor(private http:HttpClient) { }

  public getResource(url: string){

      return this.http.get(this.host + url);

  }
}
