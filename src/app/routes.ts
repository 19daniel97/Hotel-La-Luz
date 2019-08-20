import { RouterModule } from '@angular/router';
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
import { UserComponent } from './components/user/user.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ReservacionusuarioComponent } from './components/reservacion/reservacionusuario/reservacionusuario.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { OcupacionComponent } from './components/ocupacion/ocupacion.component';
import { ReporteComponent } from './components/ocupacion/reporte/reporte.component';
import { ContactolistaComponent } from './components/contacto/contactolista/contactolista.component';
export const appRoutes = [
   
    {
        path: 'habitacion', component: HabitacionComponent, canActivate: [AuthGuard],
    },
    {
        path: 'contactolista', component: ContactolistaComponent, canActivate: [AuthGuard],
    },
    {
        path: 'atraccion', component: AtraccionComponent, canActivate: [AuthGuard],
    }, 
    {
        path: 'politica', component: PoliticaComponent, canActivate: [AuthGuard],
    },
    {
        path: 'contacto', component: ContactoComponent,
    }, 
    {
        path: 'tipohab', component: TipohabComponent, canActivate: [AuthGuard] ,
    
    },
    {
        path: 'infogen', component: InfogenComponent, canActivate: [AuthGuard],
    
    },{
        path: 'forpago', component: ForpagoComponent, canActivate: [AuthGuard],
    },
    {
        path: 'usuario', component: UsuarioComponent, canActivate: [AuthGuard],
    } ,
    {
        path:'ofertas', component: OfertasComponent, canActivate: [AuthGuard],
    },
    {
    path:'paquetes', component: PaquetesComponent, canActivate: [AuthGuard],
    },
    {
        path: 'reservacion', component: ReservacionComponent,
    },
    {
        path: 'home', component: HomeComponent, 
    }
    ,
    {
        path: 'reservacionusuario', component: ReservacionusuarioComponent,
    },
    {
        path: 'reporte', component: ReporteComponent,canActivate: [ AuthGuard ],
    },
    {
        path: 'ocupacion', component: OcupacionComponent, canActivate: [ AuthGuard ],
    },
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard]
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    }

]

    export const routing = RouterModule.forRoot(appRoutes);
