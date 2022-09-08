import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  Skills : Array<any> = []
  constructor() { }

  ngOnInit(): void {

    let skills1= {
      fecha: "2022",
      logros : [
        {descripcion: "1 año de experencia en JavaScrip"}
      
      ]
    };
    let skills2 = {
      fecha: "2022",
      logros : [
        {descripcion: "1 año de experencia en "}
      ]
    };
    let skills3 = {
      fecha: "2019",
      logros : [
        {descripcion: "1 año de experencia en Bases de datos"}
      
      ]
    };

    this.Skills.push(skills1);
    this.Skills.push(skills2);
    this.Skills.push(skills3);

  }
}
