import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export interface BasicInfo {
  id: number,
  name: string,
}

export interface MemberInfo extends BasicInfo {
  mobile: number
}

@Component({
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent {
  selectedTest = new FormControl('');

  testList: BasicInfo[] = [
    { id:1, name:"BLOAD TEST-BASIC"},
    { id:2, name:"BLOAD TEST-PRI"},
    { id:3, name:"SUGAR TEST"},
    { id:4, name:"URINE TEST"}
  ];

  patients: MemberInfo[] = [
    {id:1 , name:"Gokula Jeyagopal", mobile: 8056190788},
    {id:2 , name:"Bhaskar", mobile: 8056190788},
  ];
  doctors: MemberInfo[] = [
    {id:1 , name:"Vijay", mobile: 8056190788},
    {id:2 , name:"Sathish", mobile: 8056190788},
  ];
  hospitals: BasicInfo[] = [
    {id:1 , name:"ABC HOSPITAL"},
    {id:2 , name:"LIFE LINE"},
  ];
  
  filteredHospitals: Observable<BasicInfo[]>;

  ngOnInit() {
  }

}
