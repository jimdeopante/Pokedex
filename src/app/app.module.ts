import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APIService } from './pokemonAPI.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatInputModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatButtonModule} from '@angular/material';
import { MatDialogModule} from '@angular/material/dialog';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe} from './pipes/filter.pipe';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FilterWithTypePipe } from './pipes/filtertype';
import {MatFormFieldModule} from '@angular/material/form-field';

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
