import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaAlumnosComponent } from './ListaAlumnos/ListaAlumnos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            ListaAlumnosComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi primera aplicación Angular';
}
