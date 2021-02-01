import { MessagesService, IAlert } from "./messages.service";
import { Component } from "@angular/core";
import { Router, NavigationStart } from '@angular/router'

@Component({
  selector: 'simeq-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent {
  alerts: Array<IAlert>;

  public _routerSubscription: any;

  constructor(private router: Router, private msgService: MessagesService) {
    this.alerts = this.msgService.alerts;

    this._routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.msgService.clear();
      }
    });
  }

  public closeAlert(alert: IAlert) {
    this.msgService.removeMessage(alert);
  }

  ngOnDestroy(): void {
    this._routerSubscription.unsubscribe();
  }

}


