export class LoggerProps {
  logLevel: string;
  serverLogLevel ? : string;
  serverLogURI ? : string;
}

export var defaultLoggerProps: LoggerProps = {
  logLevel: 'DEBUG'
}
