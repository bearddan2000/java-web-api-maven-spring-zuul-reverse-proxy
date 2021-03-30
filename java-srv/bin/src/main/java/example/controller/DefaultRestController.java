package example.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DefaultRestController {

  @RequestMapping(value = "/all")
  public String available() {
    return "Spring in Action";
  }
}
