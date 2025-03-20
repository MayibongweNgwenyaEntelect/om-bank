import { Component, inject } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-country-details',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.scss',
})
export class CountryDetailsComponent {
  private countryService = inject(CountryService);

  private countryName$ = inject(ActivatedRoute).params.pipe(
    map((params) => params['name'])
  );

  public country$ = this.countryName$.pipe(
    switchMap((countryName) =>
      this.countryService.getCountryByName(countryName)
    )
  );
}
