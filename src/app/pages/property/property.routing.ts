import { Routes, RouterModule } from '@angular/router';

import { PropertyComponent } from './property.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { AddPropertyComponent } from './add-property/add-property.component';

import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: PropertyComponent,
    children: [
      { path: 'addproperty', component: AddPropertyComponent },
      { path: 'propertylist', component: PropertyListComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

