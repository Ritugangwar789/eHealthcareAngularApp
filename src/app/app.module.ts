import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { OutpatientComponent } from './components/outpatient/outpatient.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InPatientComponent } from './components/in-patient/in-patient.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DoctorupdsComponent } from './components/doctorupds/doctorupds.component';
import { RoomsupdateComponent } from './components/roomsupdate/roomsupdate.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { RoomsDetailsComponent } from './components/rooms-details/rooms-details.component';
import { AppRoutingModule } from './app-routing.module';
import { TestFacilitiesComponent } from './components/test-facilities/test-facilities.component';
import { DoctorsFacilitiesComponent } from './components/doctors-facilities/doctors-facilities.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AuthService } from './service/auth.service';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AppointmentDetailsComponent } from './components/appointment-details/appointment-details.component';
import { TransactionRecComponent } from './components/transaction-rec/transaction-rec.component';
import { TestRecordsComponent } from './components/test-records/test-records.component';


// import { PatientReportComponent } from './patient-report/patient-report.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OutpatientComponent,
    HeaderComponent,
    DashboardComponent,
    InPatientComponent,
    RegistrationComponent,
    DoctorupdsComponent,
    RoomsupdateComponent,
    PaymentDetailsComponent,
    RoomsDetailsComponent,
    TestFacilitiesComponent,
    DoctorsFacilitiesComponent,
    TestFacilitiesComponent,
    PersonalDetailsComponent,
    FeedbackComponent,
    LoadingSpinnerComponent,
    AppointmentDetailsComponent,
    TransactionRecComponent,
    TestRecordsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
