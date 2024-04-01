import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlumnoComponent } from './alumno/alumno.component';
import { ListaAlumnoComponent } from './lista-alumno/lista-alumno.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            AlumnoComponent,
            ListaAlumnoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi primera aplicación Angular';
}
