package com.example.Employees.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="api/v1/employee")
public class EmployeeController {

    private final EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping
    public List<Employee> hello(){
        return employeeService.getEmployees();
    }

    @PostMapping
    public void registerNewEmployee(@RequestBody Employee employee){
        System.out.println(employee);
        employeeService.addNewEmployee(employee);
    }

    @DeleteMapping(path="{employeeID}")
    public void deleteEmployee(@PathVariable("employeeID") Long employeeID){
        employeeService.deleteEmployee(employeeID);
    }

    @PutMapping(path="{employeeID}")
    public void updateEmployee
            (@PathVariable("employeeID") Long employeeID,
             @RequestParam(required = false) String firstname,
             @RequestParam(required = false) String lastname,
             @RequestParam(required = false) String email){
        employeeService.updateEmployee(employeeID, firstname, lastname, email);
    }

}
