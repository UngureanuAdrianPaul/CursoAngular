import { Injectable } from '@angular/core';
import { Alumno } from './Alumno';
import { CURSO } from './claseDeAlumnos';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor() { }

  getAlumnos():Observable<Alumno[]>{
    return of(CURSO);
  }

  getAlumnosAngular():Observable<Alumno[]>{
    return of(CURSO.filter((alumno)=>alumno.angular===true));
  }
}
