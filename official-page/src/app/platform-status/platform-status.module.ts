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

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlatformStatusComponent} from "./componets/platform-status.component";
import {HttpClientModule} from "@angular/common/http";
import {PlatformStatusService} from "./services/platform-status.service";
import { PlatformButtonsComponent } from './componets/platform-buttons/platform-buttons.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
  ],
  exports:[PlatformStatusComponent],
  declarations: [PlatformStatusComponent, PlatformButtonsComponent],
  providers:[PlatformStatusService]
})
export class PlatformStatusModule {
}
