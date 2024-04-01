import { Component } from '@angular/core';
import { Alumno } from '../Alumno';
import { CURSO } from '../claseDeAlumnos';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-lista-alumno',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-alumno.component.html',
  styleUrl: './lista-alumno.component.css'
})
export class ListaAlumnoComponent {
  alumnos : Alumno[] = CURSO;
}
