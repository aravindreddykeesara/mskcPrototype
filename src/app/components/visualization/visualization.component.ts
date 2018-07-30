import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DataSource } from '@angular/cdk/collections';
import { PatientdataService } from '../../services/patientdata.service';
import { QueryModel } from '../../models/queryModel';



/* tslint:disable */

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.scss']
})
export class VisualizationComponent implements OnInit {

  constructor(private patientService: PatientdataService) { }
  ageCompareValue = 'greater';

  diseases = ['brain tumor', 'bronchial tumor', 'cardiac tumor', 'gastric cancer', 'intraocular melanoma', 'kidney cancer', 'leukemia', 'liver cancer', 'lung cancer', 'neuralblastoma', 'pancreatic cancer', 'stomach cancer'];
  genders = ['male', 'female'];
  agecompare = ['greater','lesser'];

  model = new QueryModel(null,null,null);

  ngOnInit() {
  }

  clean(obj) {
  var propNames = Object.getOwnPropertyNames(obj);
  for (var i = 0; i < propNames.length; i++) {
    var propName = propNames[i];
    if (obj[propName] === null || obj[propName] === undefined || obj[propName] == ''  ) {
      delete obj[propName];
     }
   }
 }
 
  onSubmit() {

    this.clean(this.model);

    if (this.model.hasOwnProperty('age') && this.ageCompareValue!=null){
      
          if(this.ageCompareValue == ('greater')){
            let temp = this.model.age;
            this.model.age = { "$lt": temp }
          } 
            let temp = this.model.age;
            this.model.age = { "$lt": temp }

    }
  }

}


