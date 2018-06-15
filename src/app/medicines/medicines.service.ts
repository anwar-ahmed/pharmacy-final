import { Injectable } from "@angular/core";
import { Init } from "./initial-medicines";

@Injectable()
export class MedicinesService extends Init {
  constructor() {
    super();
    console.log("Initializing Medicines service ...");
    this.load();
  }

  getMedicineCount() {
    let medicines = JSON.parse(localStorage.getItem("medicines"));
    return medicines.length;
  }

  getMedicines() {
    let medicines = JSON.parse(localStorage.getItem("medicines"));
    return medicines;
  }

  getMedicine(id: any) {
    let medicines = JSON.parse(localStorage.getItem("medicines"));
    let medicine: any = null;
    for (let i = 0; i < medicines.length; i++) {
      if (medicines[i].id == id) {
        medicine = medicines[i];
        break;
      }
    }
    return medicine;
  }

  addMedicine(newMedicine: any) {
    let medicines = JSON.parse(localStorage.getItem("medicines"));
    medicines.push(newMedicine);
    localStorage.setItem("medicines", JSON.stringify(medicines));
  }

  updateMedicine(updatedMedicine: any) {
    let medicines = JSON.parse(localStorage.getItem("medicines"));
    for (let i = 0; i < medicines.length; i++) {
      if (medicines[i].id == updatedMedicine.id) {
        medicines[i] = updatedMedicine;
      }
    }
    localStorage.setItem("medicines", JSON.stringify(medicines));
  }

  deleteMedicine(id: any) {
    let medicines = JSON.parse(localStorage.getItem("medicines"));
    for (let i = 0; i < medicines.length; i++) {
      if (medicines[i].id == id) {
        medicines.splice(i, 1);
      }
    }
    localStorage.setItem("medicines", JSON.stringify(medicines));
  }
}
