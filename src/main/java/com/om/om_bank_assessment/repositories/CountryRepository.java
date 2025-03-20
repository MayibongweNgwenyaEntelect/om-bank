package com.om.om_bank_assessment.repositories;

import com.om.om_bank_assessment.entities.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CountryRepository extends JpaRepository<Country, String> {
    public Country findByName(String name);
}
