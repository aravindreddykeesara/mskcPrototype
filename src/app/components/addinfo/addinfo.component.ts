import { Component, OnInit, ViewChild } from '@angular/core';
import 'rxjs/add/observable/of';
import { PatientdataService } from '../../services/patientdata.service';
import { User } from '../../models/User';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';



/* tslint:disable */


@Component({
  selector: 'app-addinfo',
  templateUrl: './addinfo.component.html',
  styleUrls: ['./addinfo.component.scss']
})

export class AddinfoComponent implements OnInit {

  dataSource;


  displayedColumns = ['name', 'age', 'disease', 'gender'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(NgForm) patientForm: NgForm;

  constructor(private patientService: PatientdataService) { }

  diseases = ['brain tumor', 'bronchial tumor', 'cardiac tumor', 'gastric cancer', 'intraocular melanoma', 'kidney cancer', 'leukemia', 'liver cancer', 'lung cancer', 'neuralblastoma', 'pancreatic cancer', 'stomach cancer'];
  genders = ['male', 'female'];
  model = new User('', '', '', '');
 

  ngOnInit() {

    this.patientService.getAllPatients().subscribe(data => {

      this.dataSource = new MatTableDataSource<User>(data);
      this.dataSource.paginator = this.paginator;

    })


  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSubmit() {
    this.patientService.addpatient(this.model).subscribe(data => {

      if (data.status == 200) {
        this.patientService.getAllPatients().subscribe(data => {

          this.dataSource = new MatTableDataSource<User>(data);
          this.dataSource.paginator = this.paginator;
          this.patientForm.resetForm();
         // this.model = new User('', '', '', '');

        })
      } else {
        console.log("err in data add");
      }

    });

  }

}