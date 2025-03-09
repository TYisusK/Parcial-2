import { Routes } from '@angular/router';

import { MenuComponent } from './pages/menu/menu.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { InicioComponent } from './pages/inicio/inicio.component';

export const routes: Routes = [
    {
        path: 'acerca_de',
        component: AcercaComponent
    },
    {
        path: 'home',
        component: InicioComponent
    },

    {
   
        path: '**',
        redirectTo: 'home'
    }
];
