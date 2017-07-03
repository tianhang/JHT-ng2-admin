import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { PropertyComponent } from './property.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { AddPropertyComponent } from './add-property/add-property.component';

import { routing }  from './property.routing';
import { NgaModule } from '../../theme/nga.module';
@NgModule({
  imports: [
    CommonModule,
    AngularFormsModule,
    routing,
    NgaModule
  ],
  declarations: [PropertyComponent,PropertyListComponent,AddPropertyComponent]
})
export class PropertyModule { }
