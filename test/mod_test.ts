import { ConsoleTransport, Format, Houston, LogLevel, LogLevelDisplay } from '../mod.ts'

const Logger = new Houston([

  new ConsoleTransport()

])

Logger.log(LogLevel.Info, 'This is an info')
Logger.log(LogLevel.Success, 'This is a success notice')
Logger.log(LogLevel.Warning, 'This is a warning')
Logger.log(LogLevel.Error, 'This is an error')