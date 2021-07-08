import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/services/hero-service/hero.service';
import { Hero } from '../../model/Hero';

@Component( {
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
} )
export class HeroDetailComponent implements OnInit {
  hero?: Hero

  constructor (
    private route: ActivatedRoute,
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {
    const id = Number( this.route.snapshot.paramMap.get( "id" ) )
    this.heroService.getHeroById( id ).subscribe( h => {
      this.hero = h
    } )
  }

}
