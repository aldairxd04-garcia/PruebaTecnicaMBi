import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Superhero } from '../../interfaces/superhero.interface';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent {
  public superhero?: Superhero;
  public error?: string;

  constructor(private apiservice: ApiService) {}

  get superheroInfo(): Superhero | undefined {
    return this.apiservice.superhero;
  }

  get errorInfo(): string | undefined{
    return this.apiservice.error;
  }

  onSuperheroReceived(superheroName: string) {
    this.apiservice.getSuperhero(superheroName).subscribe(
      (superhero: Superhero) => {
        this.apiservice.superhero = superhero;
      },
      (error: string) => {
        this.apiservice.superhero = undefined;
        this.apiservice.error = error;
      }
    );
  }

  onErrorReceived(error: string) {
    this.error = error;
    console.log(this.error);
  }
}
