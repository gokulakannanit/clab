import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

export interface BasicInfo {
  id: number,
  name: string,
}

export interface PatientInfo extends BasicInfo {
  mobile: number
}

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent {
  hospitalControl = new FormControl('');

  patients: PatientInfo[] = [
    {id:1 , name:"Gokula Jeyagopal", mobile: 8056190788},
    {id:2 , name:"Bhaskar", mobile: 8056190788},
  ];
  hospitals: BasicInfo[] = [
    {id:1 , name:"ABC HOSPITAL"},
    {id:2 , name:"LIFE LINE"},
  ];
  
  filteredHospitals: Observable<BasicInfo[]>;

  ngOnInit() {
    this.filteredHospitals = this.hospitalControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '', this.hospitals)),
    );
  }

  private _filter(value: string, options: any[]): PatientInfo[] {
    const filterValue = value.toLowerCase();

    return options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
