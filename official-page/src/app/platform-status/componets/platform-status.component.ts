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

import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NgbTooltipConfig} from "@ng-bootstrap/ng-bootstrap";
import {PlatformStatusService} from "../services/platform-status.service";
import {PlatformStatus} from "../beans/platform-status";

@Component({
  selector: 'app-platform-status',
  templateUrl: './platform-status.component.html',
  styleUrls: ['./platform-status.component.css'],
  providers: [NgbTooltipConfig]
})
export class PlatformStatusComponent implements OnInit,AfterViewInit {

  platforms: PlatformStatus[] = [];

  constructor(private platformStatusService: PlatformStatusService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.updatePlatforms();
  }

  private updatePlatforms() {
    this.platformStatusService.getPlatforms().subscribe(platforms => {
      this.platforms = platforms;
    });
  }



}

