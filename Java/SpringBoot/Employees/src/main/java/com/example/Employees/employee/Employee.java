package com.example.Employees.employee;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table
public class Employee {
    @Id
    @SequenceGenerator(
            name="employee_sequence",
            sequenceName="employee_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "employee_sequence"
    )
    private Long id;
    private String firstname;
    private String lastname;
    private LocalDate dob;
    private String adress;
    private String gender;
    private String email;
    private long phone;
    private LocalDate joineddate;
    private Integer deptnumber;

    public Employee() {
    }

    public Employee(Long id) {
        this.id = id;
    }

    public Employee(Long id, String firstname, String lastname, LocalDate dob, String adress, String gender, String email, long phone, LocalDate joineddate, Integer deptnumber) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = dob;
        this.adress = adress;
        this.gender = gender;
        this.email = email;
        this.phone = phone;
        this.joineddate = joineddate;
        this.deptnumber = deptnumber;
    }

    public Employee(String firstname, String lastname, LocalDate dob, String adress, String gender, String email, long phone, LocalDate joineddate, Integer deptnumber) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = dob;
        this.adress = adress;
        this.gender = gender;
        this.email = email;
        this.phone = phone;
        this.joineddate = joineddate;
        this.deptnumber = deptnumber;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public long getPhone() {
        return phone;
    }

    public void setPhone(long phone) {
        this.phone = phone;
    }

    public LocalDate getJoineddate() {
        return joineddate;
    }

    public void setJoineddate(LocalDate joineddate) {
        this.joineddate = joineddate;
    }

    public Integer getDeptnumber() {
        return deptnumber;
    }

    public void setDeptnumber(Integer deptnumber) {
        this.deptnumber = deptnumber;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", dob=" + dob +
                ", adress='" + adress + '\'' +
                ", gender='" + gender + '\'' +
                ", email='" + email + '\'' +
                ", phone=" + phone +
                ", joineddate='" + joineddate + '\'' +
                ", deptnumber=" + deptnumber +
                '}';
    }
}


