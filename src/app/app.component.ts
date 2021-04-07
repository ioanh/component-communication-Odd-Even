import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-communication';



  evenArr = []
  oddArr = []

  onEventCatched(data){

    if(data.eventNumber % 2 == 0){
      this.evenArr.push(data.eventNumber)
    }
    else {
      this.oddArr.push(data.eventNumber)
    }
  
  }
}


