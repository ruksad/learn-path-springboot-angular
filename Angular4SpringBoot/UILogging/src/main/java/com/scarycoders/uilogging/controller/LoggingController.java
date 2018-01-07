package com.scarycoders.uilogging.controller;


import com.scarycoders.uilogging.model.LogModel;
import java.util.Objects;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class LoggingController {

  @PostMapping(path = {"/ui-logger-end-point"},consumes = {MediaType.APPLICATION_JSON_VALUE})
  public ResponseEntity<String> UiLoggerEndPoint(@RequestBody LogModel obj){

    if(Objects.nonNull(obj)){
      switch (obj.getLevel()){
        case "TRACE":
          log.trace(obj.getMessage());
          break;
        case "DEBUG":
          log.debug(obj.getMessage());
          break;
        case "INFO":
          log.info(obj.getMessage());
          break;
        case "LOG":
         log.info(obj.getMessage());
          break;
        case "WARN":
          log.warn(obj.getMessage());
          break;
        case "ERROR":
         log.error(obj.getMessage());
          break;
        case "FATAL":
          log.error(obj.getMessage());
          break;
        default:
          log.warn("nothing to be sown");
      }
      return ResponseEntity.status(HttpStatus.OK).body("i am logged");
    }else {
      return ResponseEntity.status(HttpStatus.OK).body("i am not logged");
    }
  }
}
