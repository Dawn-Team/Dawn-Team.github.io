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
