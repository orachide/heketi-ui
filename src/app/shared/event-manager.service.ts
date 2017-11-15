import { Injectable } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs/Rx';
import { NextObserver } from 'rxjs/Observer';

@Injectable()
export class EventManagerService {

  subjects = {};


  constructor() { }

  createName (name) {
    return '$' + name;
  }

  broadcast(name: string, data: any){
    var fnName = this.createName(name);
    this.subjects[fnName] || (this.subjects[fnName] = new Subject().subscribe);
    this.subjects[fnName].next(new Event(name,data));
  }

  subscribe(name, handler) {
    var fnName = this.createName(name);
    this.subjects[fnName] || (this.subjects[fnName] = new Subject());
    return this.subjects[fnName].subscribe(handler);
};
}

export class Event{
  constructor(public name: string, public data: any){}
}
