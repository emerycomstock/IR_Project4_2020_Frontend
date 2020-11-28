import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GlobalVarsService } from '../../services/global-vars.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('headerSearch') headerSearchInput: ElementRef;

  constructor(public globalVars: GlobalVarsService) { }

  public executeHeaderSearch() {
    this.globalVars.executeSearch(this.headerSearchInput?.nativeElement?.value ?? undefined);
  }
}
