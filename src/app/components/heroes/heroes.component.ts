import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/message/messages.service';
import { Hero } from '../../model/Hero';
import { HeroService } from '../../services/hero-service/hero.service';

@Component( {
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
} )
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: "Windstorm"
  }
  heroes: Hero[] = []
  selectedHero?: Hero

  constructor (
    private readonly heroService: HeroService,
    private readonly messagesService: MessagesService
  ) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  onSelect( hero: Hero ) {
    this.messagesService.add( `HeroesComponent: Selected hero id=${ hero.id }` );
    this.selectedHero = hero
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe( heroArr => {
      this.heroes = heroArr
    } )
  }

}
