import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alumno } from '../Alumno';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { CURSO } from '../claseDeAlumnos';


@Component({
  selector: 'app-ListaAlumnos',
  standalone: true,
  imports: [FormsModule,
    UpperCasePipe,
    CommonModule
  ],
  templateUrl: './ListaAlumnos.component.html',
  styleUrl: './ListaAlumnos.component.css'
})
export class ListaAlumnosComponent {
  alumnos = CURSO; 
}
