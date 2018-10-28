import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{EstudianteListComponent} from '../estudiante-list/estudiante-list.component';
//  Service 
import { EstudianteService } from '../../../services/estudiante.service';

// Class
import { Estudiante } from '../../../models/estudiante';

// toastr
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
  nombre:EstudianteListComponent;

  constructor(
    private estudianteService: EstudianteService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.estudianteService.getEstudiantes();
    this.resetForm();
  }

  onSubmit(estudianteForm: NgForm)
  {
    if(estudianteForm.value.$key == null)
      this.estudianteService.insertEstudiante(estudianteForm.value);
    else
    this.estudianteService.updateEstudiante(estudianteForm.value);
    
    this.resetForm(estudianteForm);
    this.toastr.success('Estudiante Registrado', 'Operacion Exitosa');
   // this.nombre.getPromedios();
  //  this.nombre.getNombres();
 

    
  }

  resetForm(estudianteForm?: NgForm)
  {
    if(estudianteForm != null)
    estudianteForm.reset();
      this.estudianteService.selectedEstudiante = new Estudiante();
  }

}
