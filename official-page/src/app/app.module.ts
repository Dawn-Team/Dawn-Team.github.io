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

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {MainContentsComponent} from './main-contents/main-contents.component';
import {FooterComponent} from './footer/footer.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AppRouterModule} from "./app-router/appRouter.module";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {ModalContentComponent} from './modal-content/modal-content.component';
import {PlatformStatusModule} from "./platform-status/platform-status.module";


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainContentsComponent,
    FooterComponent,
    ModalContentComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRouterModule,
    PlatformStatusModule
  ],
  entryComponents: [ModalContentComponent],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
