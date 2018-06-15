import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { MedicineComponent } from './medicines/medicine.component';
import { AddMedicineFormComponent } from './medicines/addmedicine-form.component';
import { EditMedicineFormComponent } from './medicines/editmedicine-form.component';

const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'medicines', component: MedicinesComponent },
  { path: 'medicines/:id', component: MedicineComponent },
  { path: 'addMedicine', component: AddMedicineFormComponent },
  { path: 'editMedicine/:id', component: EditMedicineFormComponent }
];

export const routing = RouterModule.forRoot(appRoutes);