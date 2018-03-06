import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  template: `
    <input [(ngModel)]="name">
    <p> Hello {{ name | capitalize }}! </p>
  `,
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent {}
