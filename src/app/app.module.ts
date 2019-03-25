import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParkingComponent } from './parking/parking.component';
import {ParkingService} from './service/parking.service'
import {HttpClientModule} from '@angular/common/http'
import { FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { MyDialogComponent } from './my-dialog/my-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ParkingComponent,
    MyDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  entryComponents:[
    MyDialogComponent
  ],
  providers: [ParkingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
