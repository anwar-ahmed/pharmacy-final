import { Component, OnInit } from '@angular/core';
import { MedicinesService } from "./medicines.service";

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {
  medicines: any[];

  constructor(private _medicineService: MedicinesService) { }

  ngOnInit() {
    this.medicines = this._medicineService.getMedicines();
    console.log(this.medicines);
  }

  deleteMedicine(mid: any) {
    this._medicineService.deleteMedicine(mid);
    this.medicines = this._medicineService.getMedicines();
  }
}
