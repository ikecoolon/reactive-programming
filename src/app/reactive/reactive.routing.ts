import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {ReactiveComponent} from "./reactive.component";

const routes: Routes = [
  {path: 'reactive', component: ReactiveComponent}
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
