import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// NEW
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';

// NEW
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BuiltInPipesComponent,
    CustomPipesComponent,
    
    // NEW
    CapitalizePipe
  ],
  imports: [
    BrowserModule,

    // NEW
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
