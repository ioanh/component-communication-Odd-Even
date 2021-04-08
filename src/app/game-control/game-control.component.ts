import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  
  @Output('eventTriggered') eventTriggered = new EventEmitter <{eventNumber: number}>();

  interval;

  num: number = 0;

  startGame(){
    this.interval = setInterval(() => {
      this.eventTriggered.emit({
        eventNumber: ++ this.num 
      })
    }, 1000)
  }

  endGame(){
    clearInterval(this.interval)
  }


}
