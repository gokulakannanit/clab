import { Component, OnInit, Signal, signal} from '@angular/core';

export interface EntryPoint {
  title: string,
  link: string,
  icon: string
}

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  constructor() {}

  entryPoints: Signal<EntryPoint[]> = signal([
    { title: 'ADD PATIENT', link:'/add/patient', icon: 'patient'},
    { title: 'ADD DOCTOR', link:'/add/doctor', icon: 'doctor'},
    { title: 'NEW TEST', link:'/new/test', icon: 'form'},
    { title: 'REPORT HISTORY', link:'/test/history', icon: 'history'},
  ])

  ngOnInit(): void {
  }

}
