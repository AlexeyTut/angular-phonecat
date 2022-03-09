import { Component, OnInit } from '@angular/core';
import { LogNewService } from '@src/app/services/utils/log-new.service';

@Component({
  selector: 'app-phonecat',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private logService: LogNewService) {

  }

  ngOnInit() {
  }
}
