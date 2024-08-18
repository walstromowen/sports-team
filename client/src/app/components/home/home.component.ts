import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(public homeService: HomeService){}

  getPlayers(){
    this.homeService.getPlayers()
  }
  getPlayer(){
    this.homeService.getPlayer()
  }
  addPlayer(){
    this.homeService.addPlayer()
  }
  updatePlayer(){
    this.homeService.updatePlayer()
  }
  deletePlayer(){
    this.homeService.deletePlayer()
  }
  getPlayerMostTds(){
    this.homeService.getPlayerMostTds()
  }
  getPlayerMostYds(){
    this.homeService.getPlayerMostYds()
  }
  getPlayerLeastYds(){
    this.homeService.getPlayerLeastYds()
  }
  getPlayersMostToLeastRec(){
    this.homeService.getPlayersMostToLeastRec()
  }
  getPlayerByFirstName(){
    this.homeService.getPlayerByFirstName()
  }

}
