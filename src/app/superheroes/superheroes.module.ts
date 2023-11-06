import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperheroesRoutingModule } from './superheroes-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalComponent } from './pages/principal/principal.component';
import { SearchHeroComponent } from './components/search-hero/search-hero.component';
import { InfoHeroComponent } from './components/info-hero/info-hero.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [PrincipalComponent,  SearchHeroComponent, InfoHeroComponent, NavbarComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, SuperheroesRoutingModule],
})
export class SuperheroesModule {}
