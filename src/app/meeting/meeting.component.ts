import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  ngOnInit(): void {
    $(function () {
      $('#datetimepicker1').datetimepicker({
        format: 'DD/MM/YYYY, hh:mm A',
        icons: {
          time: 'far fa-clock',
          date: 'far fa-calendar',
          up: 'fas fa-arrow-up',
          down: 'fas fa-arrow-down',
          previous: 'fas fa-chevron-left',
          next: 'fas fa-chevron-right',
          today: 'fas fa-calendar-check',
          clear: 'fas fa-trash-alt',
          close: 'fas fa-times'
        }
      });
    });
  }
}
