import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'auto-complete',
  standalone: true,
  imports: [
    CommonModule,  
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent {

  @ViewChild('inputtxt')
  private inputtxt:any;


  @Input() label: string = '';

  myControl = new FormControl();

  @Input() options: any[] = [];

  filteredOptions: Observable<any[]>;

  ngOnInit() {
    this.initiateFilter();
  }

  private initiateFilter() {
    this.filteredOptions = new Observable();
    this.filteredOptions.pipe();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '', this.options)),
    );
  }
  clearSelection() {
    this.inputtxt.nativeElement.focus();
    this.inputtxt.value='';
    this.myControl.setValue(null);
    this.initiateFilter();
  }

  private _filter(value: string, options: any[]): any[] {
    const filterValue = value.toLowerCase();
    return options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
