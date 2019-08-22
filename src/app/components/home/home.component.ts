import { Component, OnInit } from '@angular/core';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { Habitacion } from 'src/app/models/habitacion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rooms;
  img;
  constructor(public habService: HabitacionService) { }

  ngOnInit() {
    this.getRooms();
    this.img = 0;
  }

  getRooms() {
    this.habService.getHabitaciones().subscribe(res => {
      this.rooms = res as Habitacion[];
    });
  }

  

}
