import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alumno } from '../Alumno';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { AlumnoDetalleComponent } from '../alumno-detalle/alumno-detalle.component';
import { AlumnoService } from '../alumno.service';


@Component({
  selector: 'app-ListaAlumnos',
  standalone: true,
  imports: [FormsModule,
    UpperCasePipe,
    CommonModule,
    AlumnoDetalleComponent
  ],
  templateUrl: './ListaAlumnos.component.html',
  styleUrl: './ListaAlumnos.component.css'
})
export class ListaAlumnosComponent {
  alumnos : Alumno[];
  alumnoActual: Alumno;

  constructor(private alumnoService: AlumnoService) {
    this.alumnoActual = { dni: -1, nombre: "" };  
    this.alumnos= [];
    console.log("CONSTRUIDO componente listaAlumnos");
  }
  getAlumnos():void {
    this.alumnoService.getAlumnos().subscribe(unaListaAlumnos=>this.alumnos=unaListaAlumnos);
  }
  ngOnInit():void {
    console.log("INICIADO componente listaAlumnos");
    this.getAlumnos();
  }

  onSelectAlumno(alumno: Alumno): void {
    console.log("Alumno seleccionado: " + alumno.nombre);
    if (this.alumnoActual != alumno) {
      this.alumnoActual = alumno;
    } else {
      this.alumnoActual = { dni: -1, nombre: "" };
    }

  }
}
