import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { MedicinesService } from "./medicines.service";

@Component({
  selector: "addmedicine-form",
  templateUrl: "./addmedicine-form.component.html",
  styleUrls: ["./medicines.component.css"]
})
export class AddMedicineFormComponent {
  types: string[] = ["Capsule", "Tablet", "Gel", "Syrup"];

  constructor(
    private _medicineService: MedicinesService,
    private router: Router
  ) {}

  onSubmit(formValue: any) {
    console.log("Form Value = " + JSON.stringify(formValue, null, 4));
    let medicineCount = this._medicineService.getMedicineCount();
    let newMedicine = {
      id: medicineCount + 1,
      name: formValue.name,
      manufacturer: formValue.manufacturer,
      batchno: formValue.batchno,
      expiry: formValue.expiry,
      price: formValue.price,
      type: formValue.type
    };
    this._medicineService.addMedicine(newMedicine);
    this.router.navigate(["medicines"]);
  }
}
