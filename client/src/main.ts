import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; // imports AppModule from src/app.module.ts

platformBrowserDynamic()
  .bootstrapModule(AppModule) // 'boots' AppModule as our application
  .catch((err) => console.error(err));
