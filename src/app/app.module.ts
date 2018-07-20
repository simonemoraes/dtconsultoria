import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { SocialComponent } from './layout/social/social.component';
import { MenuComponent } from './layout/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ServicosComponent } from './servicos/servicos.component';
import { PacotesServicosComponent } from './pacotes-servicos/pacotes-servicos.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { ContatoComponent } from './contato/contato.component';
import { RodapeComponent } from './layout/rodape/rodape.component';


@NgModule({
  declarations: [
    AppComponent,
    SocialComponent,
    MenuComponent,
    HomeComponent,
    ProdutosComponent,
    ServicosComponent,
    PacotesServicosComponent,
    PortifolioComponent,
    ContatoComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
