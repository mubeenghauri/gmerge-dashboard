import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../service/stats.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


interface DataPicker {
	value: string;
}

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

	dates : DataPicker[] = [];
  data : any;

  totalEmailsSent : string = "0";
  emailOpened : string = "0";
  openedPercentage : number = 0.0;
  replies : string = "0";


  constructor(private statsService: StatsService) { 
  	
  }

  ngOnInit() {
    document.getElementById("main").hidden = true;
    this.statsService.getStats().subscribe( res => {
      console.log(res);
      this.data = res;
      for(let key in this.data) {
        this.dates.push({"value": key});
      }

      console.log(this.data);
      console.log(this.dates);
      document.getElementById("spinner").hidden = true;
      document.getElementById("main").hidden = false;

    });


  }



  updateStats(event) {
    var value = event.value;
    this.totalEmailsSent = this.data[value].sent;
    this.emailOpened = this.data[value].opened;
    this.openedPercentage = this.data[value].openedRate;
    this.replies = this.data[value].replied;
    this.openedPercentage = Math.round(this.openedPercentage);
  }

}
