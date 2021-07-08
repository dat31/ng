import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';

const routes: Routes = [
  { path: "heroes", component: HeroesComponent },
  { path: "detail/:id", component: HeroDetailComponent },
  { path: "dashboard", component: DashBoardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
]

@NgModule( {
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
} )
export class AppRoutingModule { }
