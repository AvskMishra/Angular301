import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatIconModule,
  MatGridListModule,
  MatInputModule,
  MatSelectModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTableModule,
  MatButtonToggleModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { MatMenuModule} from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';

const materialModules = [
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatIconModule,
  MatGridListModule,
  MatMenuModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
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
