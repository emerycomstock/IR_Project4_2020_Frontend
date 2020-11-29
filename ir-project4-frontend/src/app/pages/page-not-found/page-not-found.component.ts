import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVarsService } from 'src/app/services/global-vars.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(public globalVars: GlobalVarsService,
              public router: Router) { }

  ngOnInit(): void {
    this.globalVars.currentPage = 'PageNotFound';
  }

  public goToSearch() {
    this.globalVars.startLoading(['search'], 'Search');
  }
}
