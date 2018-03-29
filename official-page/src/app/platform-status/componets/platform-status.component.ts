import {Component, OnInit} from '@angular/core';
import {NgbTooltipConfig} from "@ng-bootstrap/ng-bootstrap";
import {PlatformStatusService} from "../services/platform-status.service";
import {PlatformStatus} from "../beans/platform-status";

@Component({
  selector: 'app-platform-status',
  templateUrl: './platform-status.component.html',
  styleUrls: ['./platform-status.component.css'],
  providers: [NgbTooltipConfig]
})
export class PlatformStatusComponent implements OnInit {

  platforms: PlatformStatus[] = [];

  constructor(private platformStatusService: PlatformStatusService) {
  }

  ngOnInit() {
    this.updatePlatforms();
  }

  private updatePlatforms() {
    this.platformStatusService.getPlatforms().subscribe(platforms => {
      this.platforms = platforms;
    });
  }



}

