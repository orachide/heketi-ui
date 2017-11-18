import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule,MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatExpansionModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatExpansionModule],
  exports: [MatButtonModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatExpansionModule]
})
export class MaterialModule { }