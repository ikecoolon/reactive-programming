import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";


export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',

  },
  { path: '**', redirectTo: 'reactive' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });

