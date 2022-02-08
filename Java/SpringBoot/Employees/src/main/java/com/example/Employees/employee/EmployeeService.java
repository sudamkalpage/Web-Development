package com.example.Employees.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<Employee> getEmployees(){
        System.out.println(employeeRepository.findAll());
        return employeeRepository.findAll();
    }

    public void addNewEmployee(Employee employee) {
        Optional<Employee> employeeOptional =  employeeRepository.findEmployeeByEMail(employee.getEmail());
        if (employeeOptional.isPresent()){
            throw new IllegalStateException("Error: This email is already taken!");
        }
        employeeRepository.save(employee);
    }

    public void deleteEmployee(Long employeeID) {
        boolean exists =  employeeRepository.existsById(employeeID);
        if (!exists){
            throw new IllegalStateException("Error: Employee with Id-"+employeeID+" does not exists.");
        }
        employeeRepository.deleteById(employeeID);
    }

    @Transactional
    public void updateEmployee(Long employeeID, String firstname, String lastname, String email) {
        Employee employee =  employeeRepository.findById(employeeID).
                orElseThrow(()-> new IllegalStateException("Error: Employee with Id-"+employeeID+" does not exists."));

        if (firstname!=null && firstname.length()>0 && !Objects.equals(employee.getFirstname(),firstname)){employee.setFirstname(firstname);}
        if (lastname!=null && lastname.length()>0 && !Objects.equals(employee.getLastname(),lastname)){employee.setLastname(lastname);}
        if (email!=null && email.length()>0 && !Objects.equals(employee.getEmail(),email)){
            Optional<Employee> employeeOptional = employeeRepository.findEmployeeByEMail(email)   ;
            if (employeeOptional.isPresent()){ throw new IllegalStateException("Error: This email is already taken!");          }
            employee.setEmail(email);
        }
    }
}
