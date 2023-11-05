import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'auto-complete',
  standalone: true,
  imports: [
    CommonModule,  
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent {
  @Input() label: string = '';
  myControl = new FormControl('');

  @Input() options: any[] = [];

  filteredOptions: Observable<any[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '', this.options)),
    );
  }

  private _filter(value: string, options: any[]): any[] {
    const filterValue = value.toLowerCase();
    return options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
