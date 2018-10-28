import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

// components
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import {  EstudianteComponent } from './components/estudiantes/estudiante/estudiante.component';
import {  EstudianteListComponent } from './components/estudiantes/estudiante-list/estudiante-list.component';

// service
import {  EstudianteService } from './services/estudiante.service';
 
// Toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    EstudianteComponent,
    EstudianteListComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ChartsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [
    EstudianteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
