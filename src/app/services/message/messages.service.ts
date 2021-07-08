import { Injectable } from '@angular/core';

@Injectable( {
  providedIn: 'root'
} )
export class MessagesService {

  messages: string[] = []

  constructor () { }

  add( msg: string ): void {
    this.messages.push( msg )
  }

  clear(): void {
    this.messages = []
  }

}
