import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

    characters: any[] =
  [
    {
      id: 1,
      name: 'John',
      age: '13',
      designation: 'Developer',
      address: 'India'
    },
    {
      id: 2,
      name: 'Ram',
      age: '19',
      designation: 'Tester',
      address: 'USA'
    },
    {
      id: 3,
      name: 'Anitha',
      age: '16',
      designation: 'Developer',
      address: 'Russia'
    },
    {
      id: 4,
      name: 'Michiel',
      age: '18',
      designation: 'Developer',
      address: 'Melbourn'
    },
  ]

  flagDiv: boolean = false;
HideShow() {
  this.flagDiv = !this.flagDiv;
}

customerName: string;
customerID: number;
selectCompany(item) {
  this.customerName = item.name;
  this.flagDiv = false;
}

}
