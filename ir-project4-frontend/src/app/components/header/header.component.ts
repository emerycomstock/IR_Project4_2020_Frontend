import { ThrowStmt } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalVarsService } from '../../services/global-vars.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('headerSearch') headerSearchInput: ElementRef;

  public showSearchBar: boolean = false;
  public searchBarExists: boolean = false;
  public showAdvancedButton: boolean = true;
  public advancedButtonExists: boolean = true;

  constructor(public globalVars: GlobalVarsService,
              public router: Router,
              public route: ActivatedRoute) { }

  ngOnInit() {
    setTimeout(() => {
      if (this.globalVars.reloaded) {
        this.finalizeAdvancedButton();
        this.finalizeSearchBar();
      }
    }, 1);
  }

  ngAfterViewInit() {
    this.globalVars.loadStartEvent.subscribe(() => { this.toggleSearchBar(); });
    this.globalVars.loadStartEvent.subscribe(() => { this.toggleAdvancedButton(); });
    this.globalVars.loadEndEvent.subscribe(() => { this.finalizeSearchBar(); });
    this.globalVars.loadEndEvent.subscribe(() => { this.finalizeAdvancedButton(); });
  }

  public toggleSearchBar() {
    if (this.globalVars.targetPage === 'Results') {
      setTimeout(() => {
        this.showSearchBar = false;
        this.searchBarExists = true;
        setTimeout(() => { this.showSearchBar = true; }, 1);
      }, this.globalVars.timeToLoad / 2);
    } else {
      this.showSearchBar = false;
      setTimeout(() => { this.searchBarExists = false; }, this.globalVars.timeToLoad / 2);
    }
  }

  public finalizeSearchBar() {
    if (this.globalVars.currentPage === 'Results') {
      this.searchBarExists = true;
      this.showSearchBar = true;
    } else {
      this.searchBarExists = false;
      this.showSearchBar = false;
    }
  }

  public toggleAdvancedButton() {
    if (this.globalVars.targetPage === 'Search') {
      setTimeout(() => {
        this.showAdvancedButton = false;
        this.advancedButtonExists = true;
        setTimeout(() => { this.showAdvancedButton = true; }, 1);
      }, this.globalVars.timeToLoad / 2);
    } else {
      this.showAdvancedButton = false;
      setTimeout(() => { this.advancedButtonExists = false; }, this.globalVars.timeToLoad / 2);
    }
  }

  public finalizeAdvancedButton() {
    if (this.globalVars.currentPage === 'Search') {
      this.advancedButtonExists = true;
      this.showAdvancedButton = true;
    } else {
      this.advancedButtonExists = false;
      this.showAdvancedButton = false;
    }
  }

  public executeHeaderSearch() {
    this.globalVars.executeSearch(this.headerSearchInput?.nativeElement?.value ?? undefined);
  }

  public goToSearch() {
    this.globalVars.startLoading(['search'], 'Search');
  }

  public goToInsights() {
    this.globalVars.startLoading(['insights'], 'Insights');
  }
}
