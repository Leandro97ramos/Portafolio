//importar modulos
import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


//importar compontentes

import {ContactoComponent} from './components/contacto/contacto.component';
import {CurriculumComponent} from './components/curriculum/curriculum.component';
import {HabilidadesComponent} from './components/habilidades/habilidades.component';
import {SobreMiComponent} from './components/sobre-mi/sobre-mi.component';

import {TrabajosComponent} from './components/trabajos/trabajos.component';
import {VerTrabajosComponent} from './components/ver-trabajos/ver-trabajos.component';
import {DetailComponent} from './components/detail/detail.component';
import {EditComponent} from './components/edit/edit.component';

import {HomeBComponent} from './componentsBackend/home/home.component';
import {HabilidadesBComponent} from './componentsBackend/habilidades/habilidades.component';
import {CvBComponent} from './componentsBackend/cv/cv.component';


// arrays de rutas

const appRoutes: Routes = [

    {path: 'home' , component:SobreMiComponent},
    {path: 'contacto' , component:ContactoComponent},
    {path: 'curriculum', component: CurriculumComponent},
    {path:'habilidades', component:HabilidadesComponent},
    {path: 'proyectos' , component:VerTrabajosComponent},
    {path: 'subir-proyecto' , component:TrabajosComponent},
    {path: 'proyecto/:id' , component:DetailComponent},
    {path: 'editar-proyecto/:id' , component:EditComponent},
    {path: 'backend' , component:HomeBComponent},
    {path: 'backend/habilidadesB' , component:HabilidadesBComponent},
    {path: 'backend/curriculumB' , component:CvBComponent},

    {path: '**' , component:SobreMiComponent}

]


//Exportar el modulos


export const appRoutingProviders: any [] = [] ;
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
