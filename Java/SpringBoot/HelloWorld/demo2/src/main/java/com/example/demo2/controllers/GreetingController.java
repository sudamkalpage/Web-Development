package com.example.demo2.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class GreetingController {
    @RequestMapping("/page1")
    public ModelAndView getPage1(){
        return new ModelAndView();
    }
}
