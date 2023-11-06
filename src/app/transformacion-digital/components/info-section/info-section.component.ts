import { Component } from '@angular/core';

@Component({
  selector: 'transformacion-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.css'],
})
export class InfoSectionComponent {
  public descripciones: string[] = [
    'Administración y servicios de TI, recursos informáticos y contratos de servicios en sede principal y 5 subsedes (INTRANET)',
    'Consolidación de implementación del ERP BAAN V',
    'Diseño y construcción de los MDF´s de la INTRANET',
    'Migración de operación crítica de Data Center Comercial',
  ];

  public puestos: string[] = [
    'Gerente de cómputo y comunicaciones',
    'Gerente de desarrollo de software',
    'Desarrollador de Sistemas',
    'Administrador de Redes y Equipos de Cómputo',
  ];
}
