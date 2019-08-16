import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routing } from './routes';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { UserComponent } from './components/user/user.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';

import {UsuarioService} from './services/usuario.service';
import { appRoutes } from './routes'

// Components
import { AppComponent } from './app.component';
import { HabitacionComponent } from './components/habitacion/habitacion.component';
import { AtraccionComponent } from './components/atraccion/atraccion.component';
import { PoliticaComponent } from './components/politica/politica.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { TipohabComponent } from './components/tipohab/tipohab.component';
import { InfogenComponent } from './components/infogen/infogen.component';
import { ForpagoComponent } from './components/forpago/forpago.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { PaquetesComponent } from './components/paquetes/paquetes.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { ReservacionComponent } from './components/reservacion/reservacion.component';
import { from } from 'rxjs';
import { IndexComponent } from './components/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    UserProfileComponent,
    HabitacionComponent,
    AtraccionComponent,
    PoliticaComponent,
    ContactoComponent,
    TipohabComponent,
    InfogenComponent,
    ForpagoComponent,
    UsuarioComponent,
    PaquetesComponent,
    OfertasComponent,
    ReservacionComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
