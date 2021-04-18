import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableCompService {

  chefDetails: any;
  
  constructor() { }

  storeChefDetails(chefDetailsRecievedFromApi: any){
    this.chefDetails = chefDetailsRecievedFromApi;
  }

  getChefDetailsBasedOnId(chefId: number){
    this.chefDetails.forEach(element => {
      if (element.cookId === chefId) {
        return element;
      }
    });
    return null;
  }

}
