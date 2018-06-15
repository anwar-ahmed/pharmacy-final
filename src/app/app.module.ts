import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AboutComponent } from './about/about.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { MedicineComponent } from './medicines/medicine.component';
import { AddMedicineFormComponent } from './medicines/addmedicine-form.component';
import { EditMedicineFormComponent } from './medicines/editmedicine-form.component';
import { MedicineFilterPipe } from './medicines/medicine-filter.pipe';
import { MedicinesService } from './medicines/medicines.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, routing],
  declarations: [AppComponent, AboutComponent, MedicinesComponent, MedicineComponent, AddMedicineFormComponent, EditMedicineFormComponent, MedicineFilterPipe],
  providers: [MedicinesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

