import { Component } from '@angular/core';

@Component({
  selector: 'transformacion-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent {

  public temas: { imagen: string, tema: string }[] = [
    {
      imagen: 'Estrategia.png',
      tema: 'Estrategia'
    },
    {
      imagen: 'Tecnologia.png',
      tema: 'Selección de tecnologías'
    },
    {
      imagen: 'AnalisisDeProcesos.png',
      tema: 'Análisis de procesos en la Industria 4.0'
    },
    {
      imagen: 'HojaDeRuta.png',
      tema: 'Hoja de ruta para una implementación exitosa'
    },
    {
      imagen: 'QueHacer.png',
      tema: 'Qué hacer para obtener el máximo aprovechamiento'
    }
  ];


}
