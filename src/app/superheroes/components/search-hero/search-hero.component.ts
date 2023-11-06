import { ApiService } from './../../services/api.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Superhero } from '../../interfaces/superhero.interface';

@Component({
  selector: 'superhero-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.css'],
})
export class SearchHeroComponent {

  public heroName: string = ''

  @Output()
  public onHeroName: EventEmitter<string> = new EventEmitter();

  emitSuperheroName(): void{
    if(this.heroName.trim() === '' || !this.heroName) return;
    this.onHeroName.emit(this.heroName);
  }


}
