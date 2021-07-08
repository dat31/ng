import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import heros from '../../heroes';
import { Hero } from '../../model/Hero';
import { MessagesService } from '../message/messages.service';

@Injectable( {
  providedIn: 'root'
} )
export class HeroService {

  constructor (
    private readonly messagesService: MessagesService
  ) { }

  getHeroes(): Observable<Hero[]> {
    this.messagesService.add( "HeroService: fetched heroes" )
    return of( heros )
  }

  getHeroById( id: Hero[ "id" ] ): Observable<Hero> {
    this.messagesService.add( `HeroService: fetched hero id=${ id }` );
    return of( heros.find( h => h.id === id ) as Hero )
  }
}
