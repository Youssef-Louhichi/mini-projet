import { Injectable } from '@angular/core';
import { Activity } from '../classes/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor() { }

  lesactivitees:Activity[]=[
    new Activity(4,"fdhqj","qjfel","fjkqel","fqeh;","jehfjke"),
    new Activity(4,"fdhqj","qjfel","fjkqel","fqeh;","jehfjke"),
    new Activity(4,"fdhqj","qjfel","fjkqel","fqeh;","jehfjke"),
    new Activity(4,"fdhqj","qjfel","fjkqel","fqeh;","jehfjke"),
    new Activity(4,"fdhqj","qjfel","fjkqel","fqeh;","jehfjke")
  ]
}
