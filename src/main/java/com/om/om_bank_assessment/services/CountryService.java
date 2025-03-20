package com.om.om_bank_assessment.services;

import com.om.om_bank_assessment.entities.Country;
import com.om.om_bank_assessment.repositories.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {
    @Autowired
    private CountryRepository countryRepository;

    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    public Country getCountryByName(String name) {
        return countryRepository.findByName(name);
    }
}
