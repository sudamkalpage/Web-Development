package com.example.Employees.employee;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class EmployeeConfig {

    @Bean
    CommandLineRunner commandLineRunner(EmployeeRepository repository){
        return args -> {
            Employee harry = new Employee(
                    "Harry",
                    "Potter",
                    LocalDate.of(1980, Month.JULY,31),
                    "4 Privet Drive, Surrey",
                    "male",
                    "HarryPotter@hogwarts.com",
                    6173327143L,
                    LocalDate.of(2012, Month.JULY,5),
                    9
            );
            Employee emma = new Employee(
                    "Hemione",
                    "Granger",
                    LocalDate.of(1979, Month.SEPTEMBER,19),
                    "15, Hampstead Garden, north-west London",
                    "female",
                    "HwemioneGranger@hogwarts.com",
                    61733262153L,
                    LocalDate.of(2011, Month.JANUARY,12),
                    7
            );

            repository.saveAll(
                    List.of(harry,emma)
            );


        };
    }
}
