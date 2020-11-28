import { Component, OnInit } from '@angular/core';
import { GlobalVarsService } from 'src/app/services/global-vars.service';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit {

  constructor(public globalVars: GlobalVarsService) { }

  ngOnInit(): void {
    this.globalVars.currentPage = "Insights";
    this.globalVars.completeLoading();
  }

}
