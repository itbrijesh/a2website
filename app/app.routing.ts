import { ModuleWithProviders } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router'

import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';

const appsRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot( appsRoutes );