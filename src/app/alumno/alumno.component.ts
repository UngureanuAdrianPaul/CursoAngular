import { Component } from '@angular/core';
import { Alumno } from '../Alumno';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';


@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [FormsModule,
    UpperCasePipe
  ],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export class AlumnoComponent {
  alumno : Alumno = {
    dni:123,
    nombre:"Daniel"
  }
  

  
}
