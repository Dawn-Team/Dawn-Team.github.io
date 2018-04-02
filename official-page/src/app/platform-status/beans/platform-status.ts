/*
 *     Copyright (C) 2018, Dawn team<https://github.com/Dawn-Team>.
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

export class PlatformStatus {

  private _platformName: string;
  private _hostName: string;
  private _hostAddress: string;
  private _availablePort: number;
  private _supportedProtocol: HttpProtocols;
  private _updateDate: string;
  private _comment: string;


  constructor(platformName: string, hostName: string, hostAddress: string, availablePort: number, supportedProtocol: HttpProtocols, updateDate: string, comment: string) {
    this._platformName = platformName;
    this._hostName = hostName;
    this._hostAddress = hostAddress;
    this._availablePort = availablePort;
    this._supportedProtocol = supportedProtocol;
    this._updateDate = updateDate;
    this._comment = comment;
  }

  get platformName(): string {
    return this._platformName;
  }

  set platformName(value: string) {
    this._platformName = value;
  }

  get hostName(): string {
    return this._hostName;
  }

  set hostName(value: string) {
    this._hostName = value;
  }

  get hostAddress(): string {
    return this._hostAddress;
  }

  set hostAddress(value: string) {
    this._hostAddress = value;
  }

  get availablePort(): number {
    return this._availablePort;
  }

  set availablePort(value: number) {
    this._availablePort = value;
  }

  get supportedProtocol(): HttpProtocols {
    return this._supportedProtocol;
  }

  set supportedProtocol(value: HttpProtocols) {
    this._supportedProtocol = value;
  }

  get updateDate(): string {
    return this._updateDate;
  }

  set updateDate(value: string) {
    this._updateDate = value;
  }

  get comment(): string {
    return this._comment;
  }

  set comment(value: string) {
    this._comment = value;
  }


}

export declare type HttpProtocols = 'HTTP' | 'HTTPS'
