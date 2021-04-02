import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypescriptComponent } from './aplications/typescript/typescript.component';
import { Aplicacion1Component } from './aplications/aplicacion1/aplicacion1.component';
import { HeaderComponent } from './aplications/aplicacion1/header/header.component';
import { BodyComponent } from './aplications/aplicacion1/body/body.component';
import { FooterComponent } from './aplications/aplicacion1/footer/footer.component';
import { NavbarComponent } from './aplications/aplicacion2/components/shared/navbar/navbar.component';
import { HomeComponent } from './aplications/aplicacion2/components/home/home.component';
import { AboutComponent } from './aplications/aplicacion2/components/about/about.component';
import { HeroesComponent } from './aplications/aplicacion2/components/heroes/heroes.component';
import { HeroesService } from './aplications/aplicacion2/services/heroes.service';
import { HeroeComponent } from './aplications/aplicacion2/components/heroe/heroe.component';
import { BusquedaHeroesComponent } from './aplications/aplicacion2/components/busqueda-heroes/busqueda-heroes.component';
import { HeroeTarjetaComponent } from './aplications/aplicacion2/components/heroe-tarjeta/heroe-tarjeta.component';
import { Aplication3Component } from './aplications/aplication3/aplication3.component';

import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
import localeEn from '@angular/common/locales/en';
import localeFr from '@angular/common/locales/fr';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { VerPasswordPipe } from './pipes/ver-password.pipe';
import { Aplication4Component } from './aplications/aplication4/aplication4.component';
import { SearchComponent } from './aplications/aplication4/components/search/search.component';
import { ArtistaComponent } from './aplications/aplication4/components/artista/artista.component';
import { HomeSportiappComponent } from './aplications/aplication4/components/home-sportiapp/home-sportiapp.component';
import { NavbarSportiappComponent } from './aplications/aplication4/components/shared/navbar-sportiapp/navbar-sportiapp.component';

import { HttpClientModule } from '@angular/common/http';
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetasComponent } from './aplications/aplication4/components/tarjetas/tarjetas.component';
import { LoadingComponent } from './aplications/aplication4/components/shared/loading/loading.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Aplication6Component } from './aplications/aplication6/aplication6.component';
import { NgStyleComponent } from './aplications/aplication6/components/ng-style/ng-style.component';
import { CssComponent } from './aplications/aplication6/components/css/css.component';
import { ClasesComponent } from './aplications/aplication6/components/clases/clases.component';
import { ResaltadoDirective } from './aplications/aplication6/directives/resaltado.directive';
import { NgSwitchComponent } from './aplications/aplication6/components/ng-switch/ng-switch.component';
import { UsuarioAplicacion6Component } from './aplications/aplication6/components/usuario-aplicacion6/usuario-aplicacion6.component';
import { UsuarioNuevoAplicacion6Component } from './aplications/aplication6/components/usuario-aplicacion6/usuario-nuevo-aplicacion6.component';
import { NavbarAplicacion6Component } from './aplications/aplication6/components/navbar-aplicacion6/navbar-aplicacion6.component';
import { NavbarAuth0Component } from './aplications/aplication7/components/navbar-auth0/navbar-auth0.component';
import { Aplication7Component } from './aplications/aplication7/aplication7.component';
import { HomeAuth0Component } from './aplications/aplication7/components/home-auth0/home-auth0.component';
import { PreciosAuth0Component } from './aplications/aplication7/components/precios-auth0/precios-auth0.component';
import { ProtegidaAuth0Component } from './aplications/aplication7/components/protegida-auth0/protegida-auth0.component';
import { CallbackComponent } from './aplications/aplication7/components/callback/callback.component';
import { TemplateComponent } from './aplications/aplication8/pages/template/template.component';
import { ReactiveComponent } from './aplications/aplication8/pages/reactive/reactive.component';
import { Aplication8Component } from './aplications/aplication8/aplication8.component';
import { FormsModule } from '@angular/forms';

registerLocaleData(localeES, 'es');
registerLocaleData(localeEn, 'en');
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    TypescriptComponent,
    Aplicacion1Component,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BusquedaHeroesComponent,
    HeroeTarjetaComponent,
    Aplication3Component,
    CapitalizadoPipe,
    DomseguroPipe,
    VerPasswordPipe,
    Aplication4Component,
    SearchComponent,
    ArtistaComponent,
    HomeSportiappComponent,
    NavbarSportiappComponent,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent,
    Aplication6Component,
    NgStyleComponent,
    CssComponent,
    ClasesComponent,
    ResaltadoDirective,
    NgSwitchComponent,
    UsuarioAplicacion6Component,
    UsuarioNuevoAplicacion6Component,
    NavbarAplicacion6Component,
    Aplication7Component,
    NavbarAuth0Component,
    HomeAuth0Component,
    PreciosAuth0Component,
    ProtegidaAuth0Component,
    CallbackComponent,
    TemplateComponent,
    ReactiveComponent,
    Aplication8Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [HeroesService, {provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
