import { MyDialogComponent } from './../my-dialog/my-dialog.component';
import { MatDialog } from '@angular/material';
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
  message:String;

  constructor(private parkingService:ParkingService, public dialog:MatDialog) {
      this.getVehicles();
   }
   getVehicles(){
     this.parkingService.getAllVehicles().subscribe(result =>{
       this.vehiclesParking=result
     },
     err =>{
      this.openDialog(err.error.message);
      console.log(JSON.stringify(err))})
   }

  ngOnInit() {
  }

  updateVehicleParking(parkingControlID){
    this.parkingService.updateVehicle(parkingControlID).subscribe(result =>{
      this.message = "The "+result.vehicleType+" with license plate "+ result.licensePlate+
      " entered the "+ result.vehicleDataArrived+" and left the "+result.vehicleDataOut+
      ", this has a cost of $"+result.valueToPay+ " for "+result.totalHours+" hours.";
      this.openDialog(this.message);
      this.getVehicles();
      this.message="";
    },
    err =>{
    this.openDialog(err.error.message);
    })
  }

  addVehicle(){
    this.parkingService.addVehicle(this.addVehicleParking).subscribe(result =>{
      this.getVehicles();
      this.addVehicleParking={vehicleType: '', licensePlate: '', Engine: ''}
    },
    err =>{
    this.openDialog(err.error.message);
  })
    
  }

  openDialog(msg:String): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      data:{
        message:msg
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
