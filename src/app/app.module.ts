import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NameService } from './name.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';


@NgModule({
   declarations: [
      AppComponent,
      TopBarComponent,
      PokemonListComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [NameService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
