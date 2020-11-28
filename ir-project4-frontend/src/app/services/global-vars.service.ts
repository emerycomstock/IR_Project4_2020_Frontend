import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class GlobalVarsService {
    public advancedSearchEnabled: boolean = false;
    public currentQuery: string = undefined;
    public currentPage: string = 'Search';

    public helpActionCallback: Function = () => {};

    constructor(public router: Router) {}

    public toggleAdvancedSearchEnabled() {
        this.advancedSearchEnabled = !this.advancedSearchEnabled;
    }

    public executeSearch(query: string) {
        this.currentQuery = query;

        this.router.navigate(['results', {q: encodeURIComponent(query)}]);
    }
}