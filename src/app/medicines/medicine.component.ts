import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { MedicinesService } from "./medicines.service";

import "rxjs/add/operator/map";

@Component({
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
  id: any;
  medicine: any;

  constructor(private _medicineService: MedicinesService, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.id = +params['id'];
    });
    this.medicine = this._medicineService.getMedicine(this.id);
  }

  goBack(): void {
    this.location.back();
  }
}
