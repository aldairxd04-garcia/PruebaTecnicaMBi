import { Component } from '@angular/core';

@Component({
  selector: 'transformacion-reviews-section',
  templateUrl: './reviews-section.component.html',
  styleUrls: ['./reviews-section.component.css'],
})
export class ReviewsSectionComponent {
  public resenias: string[] = [
    '"Nuestro mercado es global, pero nuestra competencia también esta de ese tamaño"',
    '"Agilidad en los procesos, ventaja competitiva en desarrollo de productos y eficiente aplicación de los recursos con mejor ROI"',
    '"La transformación Digital provoca que todo sea más rapido y eficiente"',
  ];
}
