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

import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {PlacementArray} from "@ng-bootstrap/ng-bootstrap/util/positioning";
import {NgbTooltipConfig} from "@ng-bootstrap/ng-bootstrap";
import {PlatformStatus} from "../../beans/platform-status";

@Component({
  selector: 'app-platform-buttons',
  templateUrl: './platform-buttons.component.html',
  styleUrls: ['./platform-buttons.component.css']
})
export class PlatformButtonsComponent implements OnInit, OnChanges {


  @Input() platformStatus: PlatformStatus;

  private _placement: PlacementArray = "bottom";

  private _status: PlatformRunningStatus = "loading";

  private _tooltipText = 'loading status...';

  constructor(config: NgbTooltipConfig) {
    config.placement = this._placement;
  }

  ngOnInit() {
  }

  ngOnChanges() {
    // TODO, hard code, need to add detect mechanism
    this._status = "ready";
    this._tooltipText = 'Platform is now READY';
  }


  get placement(): PlacementArray {
    return this._placement;
  }

  set placement(value: PlacementArray) {
    this._placement = value;
  }

  get status(): PlatformRunningStatus {
    return this._status;
  }

  set status(value: PlatformRunningStatus) {
    this._status = value;
  }

  get tooltipText(): string {
    return this._tooltipText;
  }

  set tooltipText(value: string) {
    this._tooltipText = value;
  }

  get link(): string {
    return this.platformStatus.supportedProtocol.toString().toLowerCase() + "://" + this.platformStatus.hostAddress + ":" + this.platformStatus.availablePort;
  }

}

export declare type PlatformRunningStatus = 'loading' | 'loaded' | 'ready' | 'offline'
