import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GlobalVarsService } from '../../services/global-vars.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements AfterViewInit {
  public loaderExists: boolean = false;
  public showClear: boolean = true;

  public externallyTriggered: boolean = false;
  public internallyTriggered: boolean = false;

  constructor(public globalVars: GlobalVarsService) { }

  ngAfterViewInit() {
    this.globalVars.loadStartEvent.subscribe(() => { this.showLoader(); });
    this.globalVars.loadEndEvent.subscribe(() => {
      this.externallyTriggered = true;
      this.closeLoader();
    });
  }

  public showLoader() {  
    this.loaderExists = true;
    this.showClear = true;

    setTimeout(() => { this.showClear = false; }, 1);
    setTimeout(() => {
      this.internallyTriggered = true;
      if (this.globalVars.targetPage === this.globalVars.currentPage) {
        this.globalVars.completeLoading();
      }
      this.closeLoader();
    }, this.globalVars.timeToLoad);
  }

  public closeLoader() {
    if (this.externallyTriggered && this.internallyTriggered) {
      this.showClear = true;
      setTimeout(() => {
        this.loaderExists = false;
        this.externallyTriggered = false;
        this.internallyTriggered = false;
      }, this.globalVars.timeToLoad);
    }
  }
}
