import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
      HomeComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },
    ]),
  ]
})
export class HomeModule {}
