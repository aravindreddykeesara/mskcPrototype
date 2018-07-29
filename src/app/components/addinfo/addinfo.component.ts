import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DataSource } from '@angular/cdk/collections';
import {PatientdataService} from '../../services/patientdata.service';
import { Patients } from '../../models/patients.model';
import { User } from '../../models/User';


/* tslint:disable */


@Component({
  selector: 'app-addinfo',
  templateUrl: './addinfo.component.html',
  styleUrls: ['./addinfo.component.scss']
})

export class AddinfoComponent implements OnInit {

  dataSource = new PatientDataSource(this.patientService);
  displayedColumns = ['name', 'age', 'disease', 'gender'];

  constructor(private patientService: PatientdataService) {}
  
  diseases = ['brain tumor','bronchial tumor','cardiac tumor', 'gastric cancer','intraocular melanoma','kidney cancer','leukemia','liver cancer','lung cancer','neuralblastoma','pancreatic cancer','stomach cancer'];
  genders = ['male','female'];

  model = new User('','','','');

  ngOnInit() {
     
  }
  
  onSubmit() {
   this.patientService.addpatient(this.model).subscribe(data =>{

    if(data.status == 200){
      console.log('no error');
      this.dataSource = new PatientDataSource(this.patientService);
    }else{
      console.log("err in data add");
    }
    
   });
   
 }


}


export class PatientDataSource extends DataSource<any>{

  constructor(private patientService: PatientdataService) {
    super();
  }

  connect(): Observable<Patients[]> {
    return this.patientService.getAllPatients();
  }

  disconnect() { }
   
}
