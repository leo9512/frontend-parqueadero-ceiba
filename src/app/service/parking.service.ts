import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(private httpClient:HttpClient) { }
  getAllVehicles():Observable<any>{
    return this.httpClient.get("http://localhost:8090/vehiclesInParking")
  }

  addVehicle(vehicle:any){
    let json = JSON.stringify(vehicle);
    let headers = new HttpHeaders().set("Content-type","application/json");
    return this.httpClient.post("http://localhost:8090/addVehicle",json,{headers:headers});
  }

  updateVehicle(id):Observable<any>{
    return this.httpClient.patch("http://localhost:8090/upDateVehicle/"+id,"");
  }
}
