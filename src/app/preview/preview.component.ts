import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  fname = 'asd';
  lname = 'otta';
  f:number[] = [0, 0];
  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log("first = "+this.f[0]);
    console.log("second = "+this.f[1]);
  }
}

