import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';

// Módulo personalizado
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el locale de la app
import localeES from '@angular/common/locales/es-PE';
import localeFR from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeES);
registerLocaleData(localeFR);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRouterModule,
    BrowserAnimationsModule,
    SharedModule,
    PrimeNgModule,
    VentasModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-PE',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
