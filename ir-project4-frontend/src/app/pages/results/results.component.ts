import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalVarsService } from 'src/app/services/global-vars.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(public globalVars: GlobalVarsService,
              public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.globalVars.currentQuery = decodeURIComponent(this.route.snapshot.paramMap.get('q'));
    this.globalVars.currentPage = 'Results';
  }
}
