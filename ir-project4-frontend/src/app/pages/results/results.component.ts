import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalVarsService } from 'src/app/services/global-vars.service';
import { Pagination } from 'src/app/models/pagination.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  public searchResults = [];
  public searchResultsFull = [
    {
      handle: 'Jeff Jefferson',
      username: 'jjefferson',
      language: 'en',
      content: 'Hello, this is some tweet content',
      verified: true
    },
    {
      handle: 'Someone',
      username: 'justsomeone',
      language: 'en',
      content: 'Lots of content, lots of content, lots of content, lots of content, lots of content, lots of content, lots of content, lots of content.',
      verified: false
    },
    {
      handle: 'Johnny Johnathan',
      username: 'jjonathan',
      language: 'en',
      content: 'Oh look, some more tweet content. How crazy is that?',
      verified: true
    },
    {
      handle: 'Generic Handle #4',
      username: 'genhandle4',
      language: 'en',
      content: 'Content, its really a wonderful thing isnt it?',
      verified: false
    },
    {
      handle: 'Billy',
      username: 'billythekid',
      language: 'en',
      content: 'Final piece of demo data!',
      verified: false
    },
  ];

  public pageData: Pagination = new Pagination();
  public resultsLoading: boolean = true;

  constructor(public globalVars: GlobalVarsService,
              public route: ActivatedRoute) {
    this.route.params.subscribe(val => {
      this.globalVars.currentQuery = decodeURIComponent(val.q);
      this.globalVars.currentPage = 'Results';
  
      if (this.globalVars.currentQuery.toLowerCase() == 'full') {
        this.setDemoData();
      } else if (this.globalVars.currentQuery.toLowerCase() == 'loading') {
        this.setLoading();
      } else {
        this.setNoResults();
      }
    });
  }

  public setDemoData() {
    this.searchResults = this.searchResultsFull;
    this.pageData = new Pagination({
      totalRecords: 5,
      recordsPerPage: 5,
      currentPage: 1
    });
    this.resultsLoading = false;
  }

  public setLoading() {
    this.searchResults = [];
    this.pageData = new Pagination();
    this.resultsLoading = true;
  }

  public setNoResults() {
    this.searchResults = [];
    this.pageData = new Pagination();
    this.resultsLoading = false;
  }
}
