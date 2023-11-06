import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { TransformacionDigitalModuleRoutingModule } from './transformacion-digital-routing.module';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { InfoSectionComponent } from './components/info-section/info-section.component';
import { ReviewsSectionComponent } from './components/reviews-section/reviews-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    HeroSectionComponent,
    InfoSectionComponent,
    ReviewsSectionComponent,
    ContactSectionComponent,
    FooterComponent,

  ],
  imports: [CommonModule, TransformacionDigitalModuleRoutingModule],
})
export class TransformacionDigitalModule {}
