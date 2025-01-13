import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppComponent } from './app.component';

// NgRx
import { AppRoutingModule } from './app.routing.module';
import { AuthModule } from './pages/auth';

@NgModule({ declarations: [AppComponent],
    bootstrap: [AppComponent], imports: [BrowserModule, AppRoutingModule, AuthModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
