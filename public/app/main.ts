import { provide } from '@angular/core';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, Router } from '@angular/router-deprecated';

import { AppComponent } from './app.component';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS
]);
