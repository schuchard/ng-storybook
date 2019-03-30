import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const sharedModules = [BrowserAnimationsModule, RouterModule, MaterialModule, ReactiveFormsModule];

@NgModule({
  imports: [CommonModule, sharedModules],
  exports: [sharedModules],
})
export class CoreModule {}
