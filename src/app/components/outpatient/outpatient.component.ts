import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { DiseaseService } from 'src/app/service/disease.service';
import { DoctorsService } from 'src/app/service/doctors.service';
import { FetchingemailService } from 'src/app/service/fetchingemail.service';

@Component({
  selector: 'app-outpatient',
  templateUrl: './outpatient.component.html',
  styleUrls: ['./outpatient.component.css'],
})
export class OutpatientComponent implements OnInit {
  outpatientForm: FormGroup = new FormGroup({});
  doctors: any[] = [];
  diseases: any[] = [];
  timeSlots: { slotName: string, slotTime: string }[] = [];
  selectedFinalDoctor: any;
  userinit: string = '';
  pd1: any = {};
  appin:any={
    address: '',
    aid:0 ,
    date: '',
    disease: '',
    docname: '',
    gender: '',
    mail: '',
    pid: 0,
    pname: '',
    pphone: '',
    ptype: '',
    room: '',
    username:''
  };
  doctorname: string ='';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private service: DoctorsService,
    private patientService: DiseaseService,
    private personalemail: FetchingemailService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.userinit = this.authService.getUserName();
    this.personalemail.getUser(this.userinit).subscribe(res => {
      console.log(res);
      this.pd1 = res;
    }, err => {
      console.log("error while fetching , no data")
    }
    );

    this.patientService.getDiseases().subscribe((response: any) => {
      const finaldiseases = response.filter(
        (s: { ipdisease: null }) => s != null && s.ipdisease != null
      );
      this.diseases = [ { ipdisease: "neuro" }, { ipdisease: "derma" },{ ipdisease: "other" }];
    });

    const userData = {
      name: 'Benjaminnn',
      phoneNumber: '9999923456',
      email: 'ben@carelon.com',
    };

    this.outpatientForm = this.fb.group({
      inputPatientName: [this.pd1.name ?? userData.name, Validators.required],
      inputPhoneNumber: [
        userData.phoneNumber,
        Validators.compose([
          Validators.required,
          Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
        ]),
      ],
      inputEmail: [this.pd1.email ?? userData.email],
      inputDateOfBirth: ['', Validators.required],
      inputDateOfAppointment: ['', Validators.required],
      inputTimeSlot: ['', Validators.required],
      inputDisease: ['', Validators.required],
      inputDoctorName: ['', Validators.required],
      agreeToTerms: [false, Validators.required],
    });

    // this.outpatientForm
    //   .get('inputDateOfAppointment')
    //   ?.valueChanges.subscribe((date) => {
    //     this.fetchDoctorsByDate(date);
    //   });

    // this.outpatientForm
    //   .get('inputDoctorName')
    //   ?.valueChanges.subscribe((doctorId) => {
    //     this.fetchTimeSlotsByDoctor(doctorId);
    //   });

    this.outpatientForm
      .get('inputDateOfAppointment')
      ?.valueChanges.subscribe((date) => {
        this.onDataChange(date);
      });

    this.outpatientForm
      .get('inputDoctorName')
      ?.valueChanges.subscribe((doctorId) => {
        this.onDoctorChange(doctorId);
      });
  }

  submitOutpatientForm() {
    if (this.outpatientForm.valid) {
      const formData = this.outpatientForm.value;
      this.service
        .bookOutpatientAppointment(formData)
        .subscribe((response: any) => {
          console.log('Form Submitted:', response);
          alert('Appointment Successfully Booked');
          const removeSlotName = this.timeSlots.find((item) => item.slotTime === formData.inputTimeSlot)
          this.selectedFinalDoctor = { ...this.selectedFinalDoctor, [removeSlotName?.slotName ?? '']: " " }
          this.service.removeTimeSlot(this.selectedFinalDoctor).subscribe((response: any) => {
          });

          this.appin.address='';
          this.appin.aid=this.pd1.id ;
          this.appin.date= formData.inputDateOfAppointment;
          this.appin.disease='';
          this.appin.docname= this.doctorname;
          this.appin.gender='';
          this.appin.mail=this.pd1.email;
          this.appin.pid=this.pd1.id;
          this.appin.pname= formData.inputPatientName;
          this.appin.pphone='';
          this.appin.ptype='Out-patient';
          this.appin.room='';
          this.appin.username=this.pd1.username;
    
        this.service.savepatientapp(this.appin).subscribe(data => {
          console.log(data);
           });
          this?.outpatientForm?.reset({
            inputEmail: formData?.inputEmail,
          });
        });
    } else {
      console.log('form invalid');
    }
  }

  onDataChange(event: Event) {
    const date = (event?.target as HTMLInputElement)?.value;
    if (date) {
      this.fetchDoctorsByDate(date);
    }
  }

  onDoctorChange(event: Event) {
    const doctorId = (event?.target as HTMLSelectElement)?.value;
    if (doctorId) {
      this.fetchTimeSlotsByDoctor(doctorId);
    }
  }

  fetchDoctorsByDate(date: string) {
    this.service.getDoctorsByDate(date).subscribe((response: any) => {
      if (Array.isArray(response)) {
        const matchingdate = response.filter((doctor) => {
          const availfromdate = doctor?.availfrom?.split('T')?.[0];
          return availfromdate === date;
        });
        if (matchingdate.length <= 0)
          alert('Choose another date of appointment');
        else this.doctors = matchingdate;
      } else {
        this.doctors = [];
      }
    });
  }

  fetchTimeSlotsByDoctor(doctorId: string) {
    this.service.getTimeSlotsByDoctor(doctorId).subscribe((response: any) => {
      this.selectedFinalDoctor = response;
      this.doctorname=this.selectedFinalDoctor.docname;
      this.timeSlots = Object.keys(response)
        .filter((key) => key.startsWith('slot'))
        .map((key) => { return { slotTime: response[key], slotName: key } })
        .filter((value) => value.slotTime !== ' ');
    });
  }

  returndash() {
    this.router.navigateByUrl('/dashboard');
  }
}

