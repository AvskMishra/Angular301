import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  MatMenuModule,
  MatInputModule,
  MatSelectModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatIconModule,
  MatGridListModule,
  MatSnackBarModule,
  MatTableModule,
  MatButtonToggleModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';

const materialModules = [
  MatCardModule,
  MatIconModule,
  MatGridListModule,
  MatMenuModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatNativeDateModule,
  MatDialogModule,
  MatSnackBarModule,
  ScrollingModule,
  MatSnackBarModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
];

@NgModule({
  imports: [materialModules],
  exports: [materialModules],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MaterialModule { }
