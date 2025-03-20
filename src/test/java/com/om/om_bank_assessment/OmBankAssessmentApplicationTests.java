package com.om.om_bank_assessment;

import java.util.*;
import com.om.om_bank_assessment.controllers.CountryController;
import com.om.om_bank_assessment.entities.Country;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class OmBankAssessmentApplicationTests {

	@Autowired
	private CountryController countryController;

	@Test
	void contextLoads() {
		assertThat(countryController).isNotNull();
	}

	@Test
	void testGetAll() {
		List<Country> countries = countryController.getAllCountries();
		assertThat(countries.size()).isEqualTo(4);
	}

	@Test
	void testGetByName() {
		Country france = countryController.getCountryByName("France");
		Country botswana = countryController.getCountryByName("Botswana");

		assertThat(france).isNotNull();
		assertThat(botswana).isNull();
	}
}
