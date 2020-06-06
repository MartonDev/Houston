/*
 * Copyright (c) 2020 · Marton Lederer
 * This file was created / generated by Marton Lederer
 * See the LICENSE on the github repo
 * https://github.com/MartonDev
 * https://marton.lederer.hu
 */

import { Color, Format, LogLevel, Options, Transport } from './types.ts'
import { TimePrefix } from './lib/prefix/prefixes/TimePrefix.ts'

/*
*
* Create a new Houston logger
*
* */
export class Houston {

  private readonly transports: Array<Transport>
  private readonly options: Options

  /*
  *
  * Initialize the logger
  *
  * @param format The format of the log. Default: Houston.text
  * @param transports The list of transports to use
  * @param options  The options to use globally by default with all transports
  *
  * */
  constructor (

    transports: Array<Transport>,
    options: Options = {

      format: Format.text,
      prefix: new TimePrefix(),
      logColors: {

        [LogLevel.Info]: Color.White,
        [LogLevel.Success]: Color.Green,
        [LogLevel.Warning]: Color.Yellow,
        [LogLevel.Error]: Color.Red

      }

    }

  ) {

    this.transports = transports
    this.options = options

    for(const transport in this.transports)
      this.transports[transport].applyDefaultOptions(this.options)

  }

  /*
  *
  * Logging something
  *
  * This will go through the given transports and call them to log your message if the logging level is configured
  *
  * @param level  The level of the log, 0 by default
  * @param message  The log message
  *
  * */
  log (level: LogLevel, message: string): void {

    for(const transport in this.transports)
      this.transports[transport].log(level, message)

  }

}