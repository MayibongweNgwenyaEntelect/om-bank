import { TestBed } from '@angular/core/testing';
import { CountryService } from './country.service';

describe('CountryService', () => {
  let service: CountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getCountries length to be 250', (done) => {
    service.getCountries().subscribe((countries) => {
      expect(countries.length).toEqual(250);
      done();
    });
  });

  it('should be getCountryByName should return the correct name', (done) => {
    const country = service
      .getCountryByName('South Africa')
      .subscribe((found) => {
        expect(found?.name).toBe('South Africa');
        done();
      });
  });
});
