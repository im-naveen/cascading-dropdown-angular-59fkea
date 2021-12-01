import { Component, OnInit } from '@angular/core';
import { SelectService } from './select.service';
import {District} from './district'
import { State } from './state';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular 5';

  selectedState: State = new State(2, 'Brazil');
  states: State[];
  districts: District[];

  constructor(private selectService: SelectService) { }

  ngOnInit() {
    this.states = this.selectService.getStates();
    this.onSelect(this.selectedState.id);
  }

  onSelect(stateid) {
    this.districts = this.selectService.getDistricts().filter((item) => item.stateid == stateid);
  }
}
