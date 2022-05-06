import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateTeamComponent } from './components/create-team/create-team.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCommonModule } from '@angular/material/core';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ConsultarEquipasComponent } from './components/consultar-equipas/consultar-equipas.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { TaskComponent } from './components/task/task.component';
import { MatTableModule } from '@angular/material/table';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { ShowTeamsComponent } from './components/show-teams/show-teams.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SidenavComponent,
    SignupComponent,
    LoginComponent,
    CreateTeamComponent,
    ConsultarEquipasComponent,
    TaskComponent,
    TeamDetailComponent,
    ShowTeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule, 
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatCommonModule,
    MatTableModule,
  ],
  providers: [
      {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptorService,
          multi: true
      }
    ],
  bootstrap: [AppComponent],
})
export class AppModule { }
