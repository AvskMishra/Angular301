import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-movie-booking',
  templateUrl: './movie-booking.component.html',
  styleUrls: ['./movie-booking.component.scss']
})
export class MovieBookingComponent implements OnInit {
  dialogResult;
  @Input() movieId;
  theaters = [{
    'name': 'ABC',
    'location': 'asdas',
    'timings' : ['2:00', '6:00', '9:00', '11:00']
  }];
  minDate = new Date();
  constructor() { }
  ngOnInit() {
  }
}
