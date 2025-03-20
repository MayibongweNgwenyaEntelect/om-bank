import { Component, inject } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private countryService = inject(CountryService);
  public readonly countries$ = this.countryService.getCountries();
}
