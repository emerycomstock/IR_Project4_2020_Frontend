import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GlobalVarsService } from 'src/app/services/global-vars.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('mainSearch') mainSearchInput: ElementRef;

  constructor(public globalVars: GlobalVarsService) { }

  ngOnInit(): void {
    this.globalVars.currentPage = 'Search';
  }

  executeBasicSearch(): void {
    this.globalVars.executeSearch(this.mainSearchInput?.nativeElement?.value ?? undefined);
  }

  executeAdvancedSearch(): void {
  }
}
