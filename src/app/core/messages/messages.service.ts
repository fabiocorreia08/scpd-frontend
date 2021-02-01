import { Injectable } from "@angular/core";
import { isNullOrUndefined } from "util";

@Injectable()
export class MessagesService {
  private static ALERT_DEFAULT_TIMER: number = 10000;
  public alerts: Array<IAlert> = [];

  constructor() { }

  public criarAlerta(type: string, message: string): IAlert {
    return {
      type: type,
      message: message,
    }
  }

  public addMessage(alerta: IAlert, timer?: number) {
    this.alerts.push(alerta);
    if(!isNullOrUndefined(timer)) {
      setTimeout(() => this.removeMessage(alerta), timer);
    } else {
      setTimeout(() => this.removeMessage(alerta), MessagesService.ALERT_DEFAULT_TIMER);
    }
  }

  public addSuccessMessage(message: string, timer?: number) {
    this.addMessage(this.criarAlerta('success', message), timer);
  }

  public addWarningMessage(message: string, timer?: number) {
    this.addMessage(this.criarAlerta('warning', message), timer);
  }

  public addErrorMessage(message: string, timer?: number) {
    this.addMessage(this.criarAlerta('error', message), timer);
  }

  public removeMessage(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  public clear() {
    for (var i = this.alerts.length; i > 0; i--) {
      let alert = this.alerts[i-1];
      this.alerts.pop()
    }
  }
}

export interface IAlert {
  type: string;
  message: string;
}
