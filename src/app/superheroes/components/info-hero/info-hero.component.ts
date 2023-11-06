import { Component, Input } from '@angular/core';
import { Superhero } from '../../interfaces/superhero.interface';

@Component({
  selector: 'superhero-info-hero',
  templateUrl: './info-hero.component.html',
  styleUrls: ['./info-hero.component.css']
})
export class InfoHeroComponent {

  @Input()
  public superhero?: Superhero;
  @Input()
  public error?: string;

}
