import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alumno } from '../Alumno';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { AlumnoDetalleComponent } from '../alumno-detalle/alumno-detalle.component';
import { AlumnoService } from '../alumno.service';


@Component({
  selector: 'app-lista-angular',
  standalone: true,
  imports: [FormsModule,
    UpperCasePipe,
    CommonModule,
    AlumnoDetalleComponent
  ],
  templateUrl: './lista-angular.component.html',
  styleUrl: './lista-angular.component.css'
})
export class ListaAngularComponent {
  alumnos : Alumno[];
  alumnoActual: Alumno;
  constructor(private alumnoService: AlumnoService) {
    this.alumnoActual = { dni: -1, nombre: "", angular: false };  
    this.alumnos= [];
    console.log("CONSTRUIDO componente listaAngular");
  }
  getAlumnos():void {
    this.alumnoService.getAlumnosAngular  ().subscribe(unaListaAlumnos=>this.alumnos=unaListaAlumnos);
  }
  ngOnInit():void {
    console.log("INICIADO componente listaAngular");
    this.getAlumnos();
  }
  onSelectAlumno(alumno: Alumno): void {
    console.log("Alumno seleccionado: " + alumno.nombre);
    if (this.alumnoActual != alumno) {
      this.alumnoActual = alumno;
    } else {
      this.alumnoActual = { dni: -1, nombre: "", angular: false };
    }

  }
}
