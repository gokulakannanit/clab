import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestFormComponent } from './test-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AutoCompleteComponent } from 'src/app/common/auto-complete/auto-complete.component';

@NgModule({
  declarations: [
    TestFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatInputModule,
    AutoCompleteComponent,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: TestFormComponent,
      },
    ]),
  ]
})
export class TestFormModule { }
