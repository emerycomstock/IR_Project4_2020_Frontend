import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsightsComponent } from './pages/insights/insights.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ResultsComponent } from './pages/results/results.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'insights', component: InsightsComponent },

  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
