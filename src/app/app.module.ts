import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APIService } from './pokemonAPI.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatInputModule, MatFormFieldModule, MatGridListModule, MatButtonModule, 
   MatDialogModule, MatSelectModule, MatToolbarModule } from '@angular/material';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe} from './pipes/filter.pipe';
import { FilterWithTypePipe } from './pipes/filtertype';


@NgModule({
   declarations: [
      AppComponent,
      TopBarComponent,
      PokemonListComponent,
      PokemonDetailsComponent,
      FilterPipe,
      FilterWithTypePipe
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
      MatDialogModule,
      FormsModule,
      ReactiveFormsModule,
      MatSelectModule,
      MatToolbarModule,
      MatFormFieldModule
   ],
   providers: [
      APIService
   ],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [PokemonDetailsComponent]
})
export class AppModule { }
