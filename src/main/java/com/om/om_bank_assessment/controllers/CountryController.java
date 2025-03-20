package com.om.om_bank_assessment.controllers;

import com.om.om_bank_assessment.entities.Country;
import com.om.om_bank_assessment.services.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/countries")
public class CountryController {
    @Autowired
    private CountryService countryService;

    @GetMapping
    public List<Country> getAllCountries() {
        return countryService.getAllCountries();
    }

    @GetMapping("/{name}")
    public Country getCountryByName(@PathVariable String name) {
        return countryService.getCountryByName(name);
    }
}
