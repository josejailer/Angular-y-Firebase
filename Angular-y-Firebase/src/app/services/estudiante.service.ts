import { Injectable } from '@angular/core';

// Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

// Model
import { Estudiante } from '../models/estudiante';
 
@Injectable()
export class EstudianteService { 

  EstudianteList: AngularFireList<any>;
  selectedEstudiante: Estudiante = new Estudiante();
  prome: number;
 
   constructor(private firebase: AngularFireDatabase) { }

  getEstudiantes()
  {
    return this.EstudianteList = this.firebase.list('/');
  }
 
  insertEstudiante(estudiante: Estudiante)
  {
    this.prome= (Number(estudiante.Especifica_Industrial)+Number(estudiante.Especifica_Sistemas)
   +Number(estudiante.Transversal_1)+ Number(estudiante.Transversal_2)+
   Number(estudiante.Transversal_3)+ Number(estudiante.Transversal_4))/6
    this.EstudianteList.push({
      grupo: estudiante.grupo,
      nombre: estudiante.nombre,
      Transversal_1: estudiante.Transversal_1,
      Transversal_2: estudiante.Transversal_2,
      Transversal_3: estudiante.Transversal_3,
      Transversal_4: estudiante.Transversal_4,
      Observaciones: estudiante.Observaciones,
      Especifica_Industrial: estudiante.Especifica_Industrial,
      Especifica_Sistemas: estudiante.Especifica_Sistemas,
      Promedio: this.prome
    });
  }

  updateEstudiante(estudiante: Estudiante)
  {
    this.prome= (Number(estudiante.Especifica_Industrial)+Number(estudiante.Especifica_Sistemas)
   +Number(estudiante.Transversal_1)+ Number(estudiante.Transversal_2)+
   Number(estudiante.Transversal_3)+ Number(estudiante.Transversal_4))/6
    this.EstudianteList.update(estudiante.$key, {
      grupo: estudiante.grupo,
      nombre: estudiante.nombre,
      Transversal_1: estudiante.Transversal_1,
      Transversal_2: estudiante.Transversal_2,
      Transversal_3: estudiante.Transversal_3,
      Transversal_4: estudiante.Transversal_4,
      Observaciones: estudiante.Observaciones,
      Especifica_Industrial: estudiante.Especifica_Industrial,
      Especifica_Sistemas: estudiante.Especifica_Sistemas,
      Promedio: this.prome

    });
  }

  deleteEstudiante($key: string)
  {
    this.EstudianteList.remove($key);
  }

  
}
