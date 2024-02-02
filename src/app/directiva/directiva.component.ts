import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directiva',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

  listaCurso: string[] = ['Typescript', 'Javascript','Java SE', 'C#', 'PHP'];
  habilitar = true;

  constructor() {}

  setHabilitar(): void {

    this.habilitar = (this.habilitar == true) ? false : true
  }
}
