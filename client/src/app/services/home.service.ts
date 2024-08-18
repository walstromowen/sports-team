import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpService: HttpClient) {}

  getPlayers(){
    //returns observable
    let observable = this.httpService.get('http://localhost:4200/api/players/get-all/')
    //attempt to parse observable
    let subscription = observable.subscribe((player)=>{
      //????? error
      console.log(player)
    })

  }
  //These functions will have same problem as getPlayers function, I cannot figure out how to parse the observable
  getPlayer(){}
  addPlayer(){}
  updatePlayer(){}
  deletePlayer(){}

  getPlayerMostTds(){}
  getPlayerMostYds(){}
  getPlayerLeastYds(){}
  getPlayersMostToLeastRec(){}
  getPlayerByFirstName(){}
}
