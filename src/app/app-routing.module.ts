import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './main-page/header/header.component';
import { MainComponent } from './main-page/main/main.component';
import { StatsComponent } from './main-page/stats/stats.component';

const routes: Routes = [
	{
		path: '', redirectTo: 'stats', pathMatch: 'full'
	},
	{
		path: 'stats', component: MainComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
