import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MedicinesService } from "./medicines.service";

@Component({
  selector: 'editmedicine-form',
  templateUrl: './editmedicine-form.component.html',
  styleUrls: ['./medicines.component.css']
})
export class EditMedicineFormComponent {
  types: string[] = ["Capsule", "Tablet", "Gel", "Syrup"];

  constructor(private _medicineService: MedicinesService, private route: ActivatedRoute, private router: Router) { }
  id: any;
  medicine: any;

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.id = +params['id'];
    });
    this.medicine = this._medicineService.getMedicine(this.id);
  }

  onSubmit(formValue: any) {
    console.log("Form Value = " + JSON.stringify(formValue, null, 4));
    let updatedMedicine = {
      id: this.medicine.id,
      name: formValue.name,
      manufacturer: formValue.manufacturer,
      batchno: formValue.batchno,
      expiry: formValue.expiry,
      price: formValue.price,
      type: formValue.type
    };
    this._medicineService.updateMedicine(updatedMedicine);
    this.router.navigate(['medicines']);
  }
}
