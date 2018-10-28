import { Component, OnInit,TemplateRef } from '@angular/core';
 import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
// model
import { Estudiante } from '../../../models/estudiante';

// service
import { EstudianteService } from '../../../services/estudiante.service';

// toastr
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-estudiante-list',
  templateUrl: './estudiante-list.component.html',
  styleUrls: ['./estudiante-list.component.css']
})
export class EstudianteListComponent implements OnInit {
  public modalRef: BsModalRef;
estudianteList: any[];
items: Observable<any[]>;
items2: Observable<any[]>;

nombres : any[]; 
Promedios: any; 
ciudades: number[];
itemList: any[];
ciudades2: any = [];
ciudades3: any = [];
Materias: any = [];
   
public barChartLabels:string[] = ['Esp. Industrial','Esp. Sistemas',
 'Transversal 1','Transversal 2','Transversal 3','Transversal 4'];
public barChartType:any = 'bar';
public barChartLegend:boolean = true;
 public barChartData:any[] = [{data: [65, 59, 80, 81], label: 'Series A'}];
 
  constructor(private estudianteService: EstudianteService, private toastr: ToastrService
     ,public db: AngularFireDatabase,public db2: AngularFireDatabase,private modalService: BsModalService) { 
  this.items = this.db.list('/').valueChanges();
  console.log(this.items);


 this.getPromedios();
  //this.getNombres();
 // <button type="button" (click)="descargar()">Descargar PDF</button>
//<button (click)="descargar()">descargar</button>

  }
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    return this.estudianteService.getEstudiantes()
      .snapshotChanges().subscribe(item => {
        this.estudianteList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.estudianteList.push(x as Estudiante);
       
       
        });
      });
       
  }
  
  public getPromedios(){
    
    this.items.subscribe(ciudades => {this.itemList = ciudades;
      var sumaTrans_1:any,sumaTrans_2:any,sumaTrans_3:any,sumaTrans_4:any,
      sumaIndustrial:any,sumaSistemas:any,v;
      var promedioTrans_1=0,promedioTrans_2=0,promedioTrans_3=0
      ,promedioTrans_4=0,promedioIndustrial=0,promedioSistemas=0; 


      for (var _i = 0; _i < ciudades.length;_i++) {
        sumaIndustrial= parseFloat(ciudades[_i].Especifica_Industrial);
    //console.log(suma);
       promedioIndustrial+=(sumaIndustrial/ciudades.length);
        }

        
      for (var _i = 0; _i < ciudades.length;_i++) {
        sumaSistemas= parseFloat(ciudades[_i].Especifica_Sistemas);
    //console.log(suma);
       promedioSistemas+=sumaSistemas/ciudades.length;
        }

   for (var _i = 0; _i < ciudades.length;_i++) {
    sumaTrans_1= parseFloat(ciudades[_i].Transversal_1);
//console.log(suma);
   promedioTrans_1+=sumaTrans_1/ciudades.length;
    }

    for (var _i = 0; _i < ciudades.length;_i++) {
      sumaTrans_2= parseFloat(ciudades[_i].Transversal_2);
  //console.log(suma);
     promedioTrans_2+=sumaTrans_2/ciudades.length;
      }

      for (var _i = 0; _i < ciudades.length;_i++) {
        sumaTrans_3= parseFloat(ciudades[_i].Transversal_3);
    //console.log(suma);
       promedioTrans_3+=sumaTrans_3/ciudades.length;
        }

        for (var _i = 0; _i < ciudades.length;_i++) {
          sumaTrans_4= parseFloat(ciudades[_i].Transversal_4);
      //console.log(suma);
         promedioTrans_4+=sumaTrans_4/ciudades.length;
          }

 /*   console.log(promedioIndustrial);
    console.log(promedioSistemas);
    console.log(promedioTrans_1);
    console.log(promedioTrans_2);
    console.log(promedioTrans_3);
    console.log(promedioTrans_4);

*/
    this.barChartData= [{data: [promedioIndustrial,promedioSistemas,promedioTrans_1,
       promedioTrans_2,promedioTrans_3 , promedioTrans_4], label: 'Series A'}];

 

   // this.getNombres();
  
   });
   }
  onEdit(estudiante: Estudiante) {
    this.estudianteService.selectedEstudiante = Object.assign({}, estudiante);
      
  }
  onDelete($key: string) {
    if(confirm('Esta Seguro Que Quiere Eliminar A Este Estudiante?')) {
      this.estudianteService.deleteEstudiante($key);
      this.toastr.warning('Estudiante Eliminado', 'Operacion Exitosa');
       
    }
  }
  public descargar(){
    return xepOnline.Formatter.Format('content' , {
      render: 'download'});
  }
}













 
/*
 public getPromedios(){
    
  this.items.subscribe(ciudades => {this.itemList = ciudades;
    this.Promedios=[ciudades.length];
 for (var _i = 0; _i < ciudades.length;_i++) {
  this.Promedios[_i]= ciudades[_i].Promedio;
  }
 // this.getNombres();
this.barChartData=this.Promedios;
console.log( this.barChartData);
});
 }* *//*
 getNombres(){
 this.items2 = this.db2.list('/').valueChanges();
  this.items2.subscribe(ciudades2 => {this.itemList = ciudades2;
   this.nombres=[ciudades2.length];
  for (var _j = 0; _j <ciudades2.length; _j++) {
   this.nombres[_j]=ciudades2[_j].nombre;
 }
  this.barChartLabels=this.nombres;
  console.log(this.barChartLabels);
 });
 } 
 *//*
 getMaterias(){
  this.items2 = this.db2.list('/').valueChanges();
   this.items2.subscribe(ciudades3 => {this.itemList = ciudades3;
    this.Materias=[ciudades3.length];
   for (var _j = 0; _j <ciudades3.length; _j++) {
    this.Materias[_j]=ciudades3[_j].Materias;
  }

   this.barChartLabels=this.nombres;
   console.log(this.barChartLabels);
  });
  } */