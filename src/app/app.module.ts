import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NameService } from './name.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { MatGridListModule } from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
   declarations: [
      AppComponent,
      TopBarComponent,
      PokemonListComponent,
      AdvancedSearchComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatCardModule,
      MatGridListModule,
      MatButtonModule,
      MatInputModule,
      MatDialogModule
   ],
   providers: [
      NameService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
