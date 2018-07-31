import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import 'rxjs/add/observable/of';
import { PatientdataService } from '../../services/patientdata.service';
import { QueryModel } from '../../models/queryModel';
import { MatPaginator, MatTableDataSource } from '@angular/material';




/* tslint:disable */

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.scss']
})
export class VisualizationComponent implements OnInit {

  dataSource;
  displayedColumns = ['name', 'age', 'disease', 'gender'];

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private patientService: PatientdataService) { }


  ageCompareValue = null;

  diseases = ['brain tumor', 'bronchial tumor', 'cardiac tumor', 'gastric cancer', 'intraocular melanoma', 'kidney cancer', 'leukemia', 'liver cancer', 'lung cancer', 'neuralblastoma', 'pancreatic cancer', 'stomach cancer'];
  genders = ['male', 'female'];
  agecompare = ['greater', 'lesser'];
  model = new QueryModel(null, null, null);
  graph = { data:null, layout: {} };
  diseasevalue: string = '';
  

  ngOnInit() {


  }


  clean(obj) {
    var propNames = Object.getOwnPropertyNames(obj);
    for (var i = 0; i < propNames.length; i++) {
      var propName = propNames[i];
      if (obj[propName] === null || obj[propName] === undefined || obj[propName] == '') {
        delete obj[propName];
      }
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSubmit() {

    this.clean(this.model);
    this.diseasevalue = this.model.disease;
   

    if (this.model.hasOwnProperty('age') && this.ageCompareValue != null) {
      if (this.ageCompareValue == ('greater')) {
        let temp = this.model.age;
        this.model.age = { "$gt": temp }
      }
      else if (this.ageCompareValue == ('lesser')) {
        let temp = this.model.age;
        this.model.age = { "$lt": temp }
      }



    }



    this.patientService.queryToMongodb(this.model).subscribe(data => {
      this.plotlyMethod(data);
      this.dataSource = new MatTableDataSource<User>(data);
      this.dataSource.paginator = this.paginator;
    })

    this.model = new QueryModel(null, null, null);
  }



  plotlyMethod(data) {

    let y = [];
    //plotly
    this.graph = {
      data: [{
        type: 'scatter',
        x: data.map(a => a['age']),
        y: Array.from({ length: data.length }, (v, k) => k = 1),
        text: ['no.of patients'],
        mode: 'markers',
        marker: {
          size: 10
        },
        transforms: [{
          type: 'groupby',
          groups: data.map(a => a['gender']),
          styles: [
            { target: 'male', value: { marker: { color: 'red' } } },
            { target: 'female', value: { marker: { color: 'blue' } } }
          ]
        },
        {
          type: 'aggregate',
          groups: data.map(a => a['age']),
          aggregations: [
            { target: 'y', func: 'sum', enabled: true },
          ]
        }

        ]
      }],
      layout: {

        title: 'Graph for selected disease : '+this.diseasevalue,
        xaxis: { title: 'Age of patients', range: [0, 100]},
        yaxis: { title: 'no.of patients'},


      }
    };
   


  }




}
