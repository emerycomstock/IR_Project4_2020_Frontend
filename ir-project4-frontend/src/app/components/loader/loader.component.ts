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

  constructor(public globalVars: GlobalVarsService) { }

  ngAfterViewInit() {
    this.globalVars.loadStartEvent.subscribe(() => { this.showLoader(); });
  }

  public showLoader() {  
    this.loaderExists = true;
    this.showClear = true;

    setTimeout(() => { this.showClear = false; }, 1);
    setTimeout(() => {
      this.closeLoader();
    }, this.globalVars.timeToLoad);
  }

  public closeLoader() {
    this.showClear = true;
    setTimeout(() => {
      this.loaderExists = false;
    }, this.globalVars.timeToLoad);
  }
}
