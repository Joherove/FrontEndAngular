import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cliente } from './cliente';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './form.component.html'  
})

export class FormComponent {
  public cliente: Cliente = new Cliente()
  public titulo:string = "Crear Cliente"

  public create(): void{
    console.log("Clicked!")
    console.log(this.cliente)    
  }
}
