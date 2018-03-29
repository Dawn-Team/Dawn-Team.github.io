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
