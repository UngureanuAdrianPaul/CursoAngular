import { Routes } from '@angular/router';
import { ListaAlumnosComponent } from './ListaAlumnos/ListaAlumnos.component';
import { ListaAngularComponent } from './lista-angular/lista-angular.component';
export const routes: Routes = [
    {path:'ListaAlumnos', component:ListaAlumnosComponent},
    {path:'ListaAngular', component:ListaAngularComponent},
];
