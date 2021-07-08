import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/Hero';
import { HeroService } from 'src/app/services/hero-service/hero.service';

@Component( {
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: [ './dash-board.component.css' ]
} )
export class DashBoardComponent implements OnInit {

  heroes: Hero[] = []
  constructor ( private readonly heroService: HeroService ) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe( h => {
      this.heroes = h.slice( 0, 5 )
    } )
  }

}
