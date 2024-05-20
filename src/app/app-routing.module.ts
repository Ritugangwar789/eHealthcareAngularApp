import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DoctorsFacilitiesComponent } from './components/doctors-facilities/doctors-facilities.component';
import { DoctorupdsComponent } from './components/doctorupds/doctorupds.component';
import { InPatientComponent } from './components/in-patient/in-patient.component';
import { LoginComponent } from './components/login/login.component';
import { OutpatientComponent } from './components/outpatient/outpatient.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RoomsDetailsComponent } from './components/rooms-details/rooms-details.component';
import { RoomsupdateComponent } from './components/roomsupdate/roomsupdate.component';
import { TestFacilitiesComponent } from './components/test-facilities/test-facilities.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AppointmentDetailsComponent } from './components/appointment-details/appointment-details.component';
import { TransactionRecComponent } from './components/transaction-rec/transaction-rec.component';
import { TestRecordsComponent } from './components/test-records/test-records.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent, },
  { path: 'registration', component: RegistrationComponent, },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'outpatient-form', component: OutpatientComponent },
  { path: 'inpatient-form', component: InPatientComponent },
  { path: 'doctorsupdate', component: DoctorupdsComponent, },
  { path: 'roomsupdate', component: RoomsupdateComponent, },
  { path: 'payment-details', component: PaymentDetailsComponent },
  { path: 'room-details', component: RoomsDetailsComponent },
  { path: 'doctor-facilities', component: DoctorsFacilitiesComponent },
  { path: 'test-facilities', component: TestFacilitiesComponent },
  { path: 'personal-details', component: PersonalDetailsComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'appointment-details', component: AppointmentDetailsComponent },
  { path: 'transaction-records' , component:TransactionRecComponent},
  { path : 'test-records', component:TestRecordsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
