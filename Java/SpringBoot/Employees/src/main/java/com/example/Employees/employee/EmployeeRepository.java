package com.example.Employees.employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    @Query("select s from Employee s where s.email=?1")
    Optional<Employee> findEmployeeByEMail(String email);
}
