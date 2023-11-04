import { Component, OnInit, WritableSignal, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NavigationEnd, NavigationSkipped, NavigationStart, Router, RouterModule } from '@angular/router';

export interface PageDetail {
  title: string,
  backURL: string
}

export interface PagesDetails {
  [id: string]: PageDetail
}

@Component({
  standalone: true,
  imports: [
    CommonModule, 
    MatIconModule, 
    MatButtonModule,
    RouterModule,
    MatProgressBarModule
  ], 
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonComponent implements OnInit{
  constructor(private _router: Router) {}

  isHomepage: WritableSignal<boolean> = signal(true);
  isLoading: WritableSignal<boolean> = signal(false);

  pageoObject: WritableSignal<PageDetail> = signal({title:'', backURL: ''});
  
  pagesDetails: WritableSignal<PagesDetails> = signal({
    "rides": {title: 'Test history', backURL: '/home'},
    "about": {title: 'About Us', backURL: '/home'},
    "patient": {title: 'Add Patient', backURL: '/home'},
    "test": {title: 'New Test', backURL: '/home'},
    "doctor": {title: 'Add Doctor', backURL: '/home'},
  });

  ngOnInit(): void {
    this.checkForHomePage(window.location.pathname);
    this._router.events.subscribe(val=>{
      if(val instanceof NavigationStart) {
        this.isLoading.set(true);
        this.checkForHomePage(val.url);
      }
      if(val instanceof NavigationEnd || val instanceof NavigationSkipped) {
        //setTimeout(()=>{this.isLoading = false}, 500);
        this.isLoading.set(false);
      }
    })
  }

  checkForHomePage(val:any): void {
    this.isHomepage.set(val === '/' || val === '/home');
    const URL = val.split("/")[val.split("/").length-1] || val;
    console.log('URL >...', URL);
    const selectPageobj:PagesDetails = this.pagesDetails();
    this.pageoObject.set(selectPageobj[URL] || {title:'No Title Found', backURL:'/home'});
  }
}
