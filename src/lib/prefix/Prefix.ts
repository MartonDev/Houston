/*
 * Copyright (c) 2020 · Marton Lederer
 * This file was created / generated by Marton Lederer
 * See the LICENSE on the github repo
 * https://github.com/MartonDev
 * https://marton.lederer.hu
 */

export class Prefix {

  private prefixText: string

  constructor (prefixText: string) {

    this.prefixText = prefixText

  }

  setPrefix (newPrefix: string): void {

    this.prefixText = newPrefix

  }

  getPrefix (): string {

    return this.prefixText

  }

}