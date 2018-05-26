import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatExpansionModule, MatDialogModule, MatOptionModule, MatSelectModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatExpansionModule, MatDialogModule, MatOptionModule, MatSelectModule, MatProgressSpinnerModule],
  exports: [MatButtonModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatExpansionModule, MatDialogModule, MatOptionModule, MatSelectModule, MatProgressSpinnerModule]
})
export class MaterialModule { }