import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';

  userData:any=[
    {name:"Sudeep",addr:"Bangalore",profile:"Developer"},
    {name:"Durga",addr:"Chennai",profile:"Developer"},
    {name:"Rupesh",addr:"Pune",profile:"Developer"},
    {name:"Ritesh",addr:"Hyderabad",profile:"Developer"},
    {name:"Aditi",addr:"Kolkata",profile:"Developer"}
  ];

  getCurrentUser(user) : void {
    console.log(user);
  }

  constructor() {
    console.log(this.userData);
  }

}
