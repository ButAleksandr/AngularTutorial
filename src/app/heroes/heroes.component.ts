import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Some hero 1'
  };
  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
    this.selectedHero = this.heroes[0];
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
