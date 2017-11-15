import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule,MatFormFieldModule, MatIconModule, MatInputModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule],
  exports: [MatButtonModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule]
})
export class MaterialModule { }