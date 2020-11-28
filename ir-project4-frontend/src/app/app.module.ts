import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Pages
import { SearchComponent } from './pages/search/search.component';
import { ResultsComponent } from './pages/results/results.component';
import { InsightsComponent } from './pages/insights/insights.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SearchResultComponent } from './components/search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsComponent,
    InsightsComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
