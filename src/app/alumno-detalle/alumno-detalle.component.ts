import { Component, Input } from '@angular/core';
import { Alumno } from '../Alumno';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alumno-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alumno-detalle.component.html',
  styleUrl: './alumno-detalle.component.css'
})
export class AlumnoDetalleComponent {
  @Input() alumno: Alumno;

  constructor() {
    this.alumno = { dni: -1, nombre: "", angular:false };
  }
}
