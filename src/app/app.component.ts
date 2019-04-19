import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading = true;
  constructor() {

  }

  ngOnInit(): void {
    setTimeout(_ => this.loading = false, 0);
  }
}
