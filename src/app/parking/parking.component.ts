import { ParkingService } from './../service/parking.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {

  addVehicleParking: any = { vehicleType: '', licensePlate: '', Engine: '' }
  vehiclesParking: any;
  vehiclesType: any = ["CAR", "MOTORCYCLE"];
  type="number"

  constructor(private parkingService:ParkingService) {
      this.getVehicles();
   }
   getVehicles(){
     this.parkingService.getAllVehicles().subscribe(result =>{
       this.vehiclesParking=result
     },
     err =>{
     console.log("Acá esta el error")
     console.log(JSON.stringify(err))})
   }

  ngOnInit() {
  }

  updateVehicleParking(parkingControlID){
    this.parkingService.updateVehicle(parkingControlID).subscribe(result =>{
      this.getVehicles();
    },
    err =>
    console.log(JSON.stringify(err)))
  }

  addVehicle(){
    this.parkingService.addVehicle(this.addVehicleParking).subscribe(result =>{
      this.getVehicles();
      this.addVehicleParking={vehicleType: '', licensePlate: '', Engine: ''}
    },
    err =>
    console.log(JSON.stringify(err)))
    
  }
}
