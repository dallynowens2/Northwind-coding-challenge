import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-n',
  templateUrl: './counter-n.component.html',
  styleUrls: ['./counter-n.component.css']
})
export class CounterNComponent implements OnInit {
  public currentCount = 0;
  public incrementNum: number = 0;

  public incrementCounter() {
    this.currentCount += this.incrementNum;
  }

  ngOnInit() {
  }

}
