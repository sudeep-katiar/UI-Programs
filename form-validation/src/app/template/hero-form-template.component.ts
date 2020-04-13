/* tslint:disable: member-ordering */
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-form-template',
  templateUrl: './hero-form-template.component.html',
  styleUrls: ['./hero-form-template.component.css'],
})
export class HeroFormTemplateComponent {

  powers = ['Software Develper', 'Software Tester', 'Team Lead', 'Manager'];

  hero = {name: 'Mr.', alterEgo: 'Address', power: this.powers[0]};

}
