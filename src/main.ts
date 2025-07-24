import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
//First file to be executed in the Angular application
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));