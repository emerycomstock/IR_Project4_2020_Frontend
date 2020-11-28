import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GlobalVarsService {
    public currentPage: string = 'Search';
    public targetPage: string = undefined;

    public currentQuery: string = undefined;
    public advancedSearchEnabled: boolean = false;

    public helpActionCallback: Function = () => {};

    public reloaded: boolean = true;
    public isLoading: boolean = false;
    public timeToLoad: number = 500;
    public loadStartEvent: Subject<string> = new Subject<string>();
    public loadEndEvent: Subject<string> = new Subject<string>();

    constructor(public router: Router) {}

    public toggleAdvancedSearchEnabled() {
        this.advancedSearchEnabled = !this.advancedSearchEnabled;
    }

    public executeSearch(query: string) {
        this.currentQuery = query;

        this.startLoading(['results', {q: encodeURIComponent(query)}], 'Results');
    }

    public startLoading(routeData: any[], pageName: string) {
        this.reloaded = false;
        this.isLoading = true;
        this.targetPage = pageName;
        this.loadStartEvent.next(pageName);

        setTimeout(() => {
            this.router.navigate(routeData);
            this.currentPage = this.targetPage;
        }, this.timeToLoad);
    }

    public completeLoading() {
        this.isLoading = false;
        this.loadEndEvent.next(this.currentPage);
    }
}