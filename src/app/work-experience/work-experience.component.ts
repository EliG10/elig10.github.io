import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperience : Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    let work1 = {
      fecha: "2018-2022",
      ubicacion: "Huatusco, Ver",
      puesto: "Gerente",
      empresa: "Nov-juq",
      logros : [
        {descripcion: "Organizadora de tareas"},
        {descripcion: "Supervisor de flujo de dinero"}
      ] 
    
    };
    let work2 = {
      fecha: "2015-2018",
      ubicacion: "Huatusco, Ver",
      puesto: "Diseñadora Gráfica",
      empresa: "Compu-Hollerith",
      logros : [
        {descripcion: "Diseño asistido por computadora (CAD)"},
        {descripcion: "Desarrollar las guías de estilo"}
      ] 
    };
    let work3 = {
      fecha: "2012-2014",
      ubicacion: "Orizaba, Ver",
      puesto: "CEO",
      empresa: "EliG10",
      logros : [
        {descripcion: "Construcción de Software "},
      ] 
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);
    this.workExperience.push(work3);

  }

}
