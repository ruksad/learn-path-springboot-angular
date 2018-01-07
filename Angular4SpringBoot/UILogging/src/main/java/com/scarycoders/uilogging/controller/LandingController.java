package com.scarycoders.uilogging.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Slf4j
@Controller
public class LandingController {


  @GetMapping(value = {"/", "/portal/"})
  public String home(Model model, HttpServletRequest request, HttpServletResponse response) {
    log.info("inside home controller");
    return "index";
  }
}
