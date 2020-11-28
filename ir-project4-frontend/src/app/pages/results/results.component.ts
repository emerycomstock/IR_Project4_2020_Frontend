import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalVarsService } from 'src/app/services/global-vars.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  public searchResults = [
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

  constructor(public globalVars: GlobalVarsService,
              public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.globalVars.currentQuery = decodeURIComponent(this.route.snapshot.paramMap.get('q'));
    this.globalVars.currentPage = 'Results';

    setTimeout(() => { this.globalVars.completeLoading() }, 1000);
  }
}
