import { Injectable } from '@angular/core';
import { State } from './state';
import { District } from './district';

@Injectable()
export class SelectService {
  getStates() {
    return [
      new State(1, 'Andhra Pradesh'),
      new State(2, 'Arunachal Pradesh'),
      new State(3, 'Assam'),
      new State(4, 'Bihar'),
      new State(5, 'Chhattisgarh'),
      new State(6, 'Goa'),
      new State(8, 'Gujarat'),
      new State(9, 'Haryana'),
      new State(9, 'Himachal Pradesh'),
      new State(10, 'Jharkhand'),
      new State(11, 'Karnataka'),
      new State(12, 'Kerala'),
      new State(13, 'Madhya Pradesh'),
      new State(14, 'Maharashtra'),
      new State(15, 'Manipur'),
      new State(16, 'Meghalaya'),
      new State(17, 'Mizoram'),
      new State(18, 'Nagaland'),
      new State(19, 'Odisha'),
      new State(20, 'Punjab'),
      new State(21, 'Rajasthan'),
      new State(22, 'Sikkim'),
      new State(23, 'Tamil Nadu'),
      new State(24, 'Telangana'),
      new State(25, 'Tripura'),
      new State(26, 'Uttar Pradesh'),
      new State(27, 'Uttarakhand'),
      new State(28, 'West Bengal'),
    ];
  }

  getDistricts() {
    return [
      new District(1, 1, 'Anantapur'),
      new District(2, 1, 'Chittoor'),
      new District(3, 1, 'East Godavari'),
      new District(4, 1, 'Guntur'),
      new District(5, 1, 'Krishna'),
      new District(6, 1, 'Kurnool'),
      new District(7, 1, 'Prakasam'),
      new District(8, 1, 'Srikakulam'),
      new District(9, 1, 'Sri Potti Sriramulu Nellore'),
      new District(10, 1, 'Visakhapatnam'),
      new District(11, 1, 'Vizianagaram'),
      new District(12, 1, 'West Godavari'),
      new District(13, 1, 'YSR District, Kadapa (Cuddapah)'),

      new District(14, 2, 'Anjaw'),
      new District(15, 2, 'Changlang'),
      new District(16, 2, 'Dibang Valley'),
      new District(17, 2, 'East Kameng'),
      new District(18, 2, 'East Siang'),
      new District(19, 2, 'Kamle'),
      new District(20, 2, 'Kra Daadi'),
      new District(21, 2, 'Kurung Kumey'),
      new District(22, 2, 'Lepa Rada'),
      new District(23, 2, 'Lohit'),
      new District(24, 2, 'Longding'),
      new District(25, 2, 'Lower Dibang Valley'),
      new District(26, 2, 'Lower Siang'),
      new District(27, 2, 'Lower Subansiri'),
      new District(28, 2, 'Namsai'),
      new District(29, 2, 'Pakke Kessang'),
      new District(30, 2, 'Papum Pare'),
      new District(31, 2, 'Shi Yomi'),
      new District(32, 2, 'Siang'),
      new District(33, 2, 'Tawang'),
      new District(34, 2, 'Tirap'),
      new District(35, 2, 'Upper Siang'),
      new District(36, 2, 'Upper Subansiri'),
      new District(37, 2, 'West Kameng'),
      new District(38, 2, 'West Siang'),

      new District(39, 3, ''),
      new District(40, 3, 'Anjaw'),
      new District(41, 4, 'Anjaw'),
    ];
  }
}
