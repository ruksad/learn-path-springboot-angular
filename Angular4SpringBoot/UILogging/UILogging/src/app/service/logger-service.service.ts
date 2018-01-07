import { inject } from '@angular/core/testing';
import {LoggerLevel} from '../models/logger-level.enum';
import { LoggerProps, defaultLoggerProps } from './../models/logger-props';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable, Inject, Optional } from '@angular/core';
import * as moment from 'moment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoggerServiceService {

  private _loggerProps: LoggerProps;
  constructor(private http: Http,
  @Inject(defaultLoggerProps)@Optional() loggerProps: LoggerProps) {
    this._loggerProps = loggerProps;
    this.info("UI mmessgage props are"+ JSON.stringify(this._loggerProps))
  }

	public set loggerProps(value: LoggerProps) {
	  this._loggerProps = value;
	}

  trace(message: string) {
    this._logMessage('TRACE', message, true);
  }

  debug(message: string) {
    this._logMessage('DEBUG', message, true);
  }

  info(message: string) {
    this._logMessage('INFO', message, true);
  }

  log(message: string) {
    this._logMessage('LOG', message, true);
  }

  warn(message: string) {
    this._logMessage('WARN', message, true);
  }

  error(message: string) {
    this._logMessage('ERROR', message, true);
  }

  private _logMessage(level: string, message: string, logOnServer: boolean) {
    if (!message) return;

    let levelColor;


    switch (level) {
      case 'TRACE':
      levelColor = 'blue';
        break;
      case 'DEBUG':
      levelColor = 'teal';
        break;
      case 'INFO':
      case 'LOG':
      levelColor = 'gray';
        break;
      case 'WARN':
      levelColor = 'yellow';
      break;
      case 'ERROR':
      levelColor = 'red';
        break;
      case 'FATAL':
      default:
        return;
    }

    if (LoggerLevel[level] >= LoggerLevel[this._loggerProps.logLevel]) {
      console.log(`%c${moment.utc().format()} [${level}] %c${message}`, `color:${levelColor}`, 'color:black');


      if (logOnServer) {
        this._logOnServer(level, message);
      }
    }
  }


  private _logOnServer(level: string, message: string) {
    if (!this._loggerProps.serverLogURI) return;

    //if the user provides a serverLogLevel and the current level is than that do not log
    if (this._loggerProps.serverLogLevel && LoggerLevel[level] < LoggerLevel[this._loggerProps.serverLogLevel]) return;

    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });

    this.http.post(this._loggerProps.serverLogURI, {
        level: level,
        message: message
      }, options)
      .map(res => res.text())
      .catch(error => error)
      .subscribe(
        res => {},
        error => this._logMessage('ERROR', 'SOMETHING WENT WRONG WHILE LOGGING ON SERVER', false)
      );

  }

}
