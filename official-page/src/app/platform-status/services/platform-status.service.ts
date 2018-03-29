/*
 *     This project is one of projects of ArvinSiChuan.com.
 *     Copyright (C) 2018, ArvinSiChuan.com <https://arvinsichuan.com>.
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

import {Injectable} from '@angular/core';
import {WebApiService} from "../../base-services/web-api.service";
import {log} from "util";
import {Observable} from "rxjs/Observable";
import {PlatformStatus} from "../beans/platform-status";
import {catchError} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PlatformStatusService extends WebApiService {

  constructor(private http: HttpClient) {
    super();
  }

  public getPlatforms(): Observable<PlatformStatus[]> {
    let url = PlatformStatusService.getApiUrl() + "data/platforms.json";
    log('Fetching...');
    log(url);
    let observable: Observable<PlatformStatus[]> = this.http.get<PlatformStatus[]>(url).pipe(
      catchError(this.handleError<PlatformStatus[]>('getHeroes'))
    );
    log('Fetching End');
    return observable;
  }


}
