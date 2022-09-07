import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  Education : Array<any> = [ ]
  constructor() { }

  ngOnInit(): void {

    let educacion1 = {
      Grado : "Primaria",
      Institucion: "Leonardo Bravo",
      Ubicacion : "Huatusco",
      fecha : "2008-2014"
    };

    let educacion2 = {
      Grado: "Secundaria",
      Institucion: "Tecnica #144",
      Ubicacion : "Huatusco",
      fecha: "2014-2017"
    };

    let educacion3 = {
      Grado: "Preparatotia",
      Institucion: "Gral. Francisco J. Múgica",
      Ubicacion : "Huatusco",
      fecha : "2017-2020"
    };

    let educacion4 = {
      Grado: "Universitario",
      Institucion: "Universidad Veracruzana",
      Ubicacion : "Ixtazoquitlán",
      fecha: "2022-2022"
    };

    this.Education.push(educacion1);
    this.Education.push(educacion2);
    this.Education.push(educacion3);
 
  }

}

