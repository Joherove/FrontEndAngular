import { BrowserModule } from '@angular/platform-browser';
import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';

//import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

//Componentes
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormComponent } from './clientes/form.component';
import { FormsModule } from '@angular/forms';

//Servicios
import { ClienteService } from './clientes/cliente.service';

//Routes
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';

const routes: Routes = [
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'clientes/form', component: FormComponent}
]

NgModule({
  declarations: [    
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),    
    HttpClientModule,
    FormsModule
  ],
  providers: [        
    ClienteService
  ]
})

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch())]
};
