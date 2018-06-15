import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'medicineFilter' })
export class MedicineFilterPipe implements PipeTransform {
  transform(value: any[], args: string): any[] {
    let filter: string = args ? args.toLocaleLowerCase() : null;
    return filter ? value.filter((medicine) =>
      medicine.name.toLocaleLowerCase().startsWith(filter) != false ||
      medicine.manufacturer.toLocaleLowerCase().startsWith(filter) != false ||
      medicine.batchno.toLocaleLowerCase().startsWith(filter) != false ||
      medicine.expiry.toLocaleLowerCase().startsWith(filter) != false ||
      medicine.type.toLocaleLowerCase().startsWith(filter) != false ||
      String(medicine.price).toLocaleLowerCase().startsWith(filter) != false) : value;
  }
}