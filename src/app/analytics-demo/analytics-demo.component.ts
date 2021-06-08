import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics-demo',
  templateUrl: './analytics-demo.component.html',
  styleUrls: ['./analytics-demo.component.css']
})
export class AnalyticsDemoComponent implements OnInit {
  
  constructor(@Inject('API_URL') apiUrl: string) { }

  ngOnInit(): void {
  }

}
