import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyComponent } from './property.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { AddPropertyComponent } from './add-property/add-property.component';

import { routing }  from './property.routing';
import { NgaModule } from '../../theme/nga.module';
@NgModule({
  imports: [
    CommonModule,
    routing,
    NgaModule
  ],
  declarations: [PropertyComponent,PropertyListComponent,AddPropertyComponent]
})
export class PropertyModule { }
