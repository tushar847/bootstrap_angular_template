import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  listOfLocations = [
    {
      cityName: 'Bangalore',
      lattitude: '123',
      longitude: '123'
    },
    {
      cityName: 'Kolkata',
      lattitude: '123',
      longitude: '123'
    },
    {
      cityName: 'Mumbai',
      lattitude: '123',
      longitude: '123'
    }
  ]

  retrunCityDetailsIfInList(input: String){
    this.listOfLocations.forEach(element => {
      if (element.cityName.toLowerCase === input.toLocaleLowerCase){
        return element;
      }
    });
    return null;
  }

  constructor() { }
}
