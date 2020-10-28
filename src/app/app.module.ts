import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {routing, appRoutingProviders} from './app.routing';


import { AppComponent } from './app.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { VerTrabajosComponent } from './components/ver-trabajos/ver-trabajos.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { HomeBComponent } from './componentsBackend/home/home.component';
import { CvBComponent } from './componentsBackend/cv/cv.component';
import { HabilidadesBComponent } from './componentsBackend/habilidades/habilidades.component';
import { HabilidadesDirective } from './components/habilidades/habilidades.directive';


@NgModule({
  declarations: [
    AppComponent,
    SobreMiComponent,
    TrabajosComponent,
    CurriculumComponent,
    HabilidadesComponent,
    ContactoComponent,
    MenuPrincipalComponent,
    VerTrabajosComponent,
    DetailComponent,
    EditComponent,
    HomeBComponent,
    CvBComponent,
    HabilidadesBComponent,
    HabilidadesDirective
  ],
  entryComponents: [HabilidadesComponent],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
      appRoutingProviders
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
