import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
  ChangeRequest,
  createChangeRequest
} from '../model/change-request.model';
@Component({
  selector: 'app-all-requests-table',
  templateUrl: './all-requests-table.component.html',
  styleUrls: ['./all-requests-table.component.css']
})
export class AllRequestsTableComponent implements OnInit {
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  displayedColumns: string[] = [
    'mcrId',
    'title',
    'productDescription',
    'status',
    'createdBy',
    'dateCreated',
    'lastChangedBy',
    'lastChangedOn'
  ];
  changeRequests = createDummyData();
  dataSource = new MatTableDataSource<ChangeRequest>(this.changeRequests); // Replace YourDataType with your data model type
  // Initialize yourData with your actual data

  constructor() {}
  xd(): void {
    console.log('XDDD');
    console.log(this.dataSource);
    const newChangeRequest = createChangeRequest({
      mcrId: 'MCR-' + Math.floor(Math.random() * (100 - 999 + 1)) + 999,
      title: ' CREATED test Title ' + +1,
      productDescription:
        'F-' +
        Math.floor(Math.random() * (99 - 10 + 1)) +
        1000 +
        '.' +
        Math.floor(Math.random() * (99 - 10 + 1)) +
        1000,
      status: 'In EVALUATION',
      createdBy: 'Maciej Kaliszewski 2',
      dateCreated: new Date(),
      lastChangedBy: 'Maciej Kaliszewski 2',
      lastChangedOn: new Date()
    });
    this.changeRequests.push(newChangeRequest);
    this.dataSource = new MatTableDataSource<ChangeRequest>(
      this.changeRequests
    );
  }
  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    // let xd = createDummyData();
    // for (let index = 0; index < xd.length; index++) {
    //   this.changeRequests.push(xd[index]);
    // }
  }
}

function createDummyData() {
  let requestsDummyData: ChangeRequest[] = [];
  const minID = 10000;
  const maxID = 99999;
  for (let index = 0; index < 6; index++) {
    const newChangeRequest = createChangeRequest({
      mcrId: 'MCR-' + Math.floor(Math.random() * (maxID - minID + 1)) + minID,
      title: 'test Title ' + (index + 1),
      productDescription:
        'F-' +
        Math.floor(Math.random() * (99 - 10 + 1)) +
        1000 +
        '.' +
        Math.floor(Math.random() * (99 - 10 + 1)) +
        1000,
      status: 'In EVALUATION',
      createdBy: 'Maciej Kaliszewski',
      dateCreated: new Date(),
      lastChangedBy: 'Maciej Kaliszewski',
      lastChangedOn: new Date()
    });
    requestsDummyData.push(newChangeRequest);
  }
  return requestsDummyData;
}
// productDescription: string;
// status: string;
// createdBy: string;
// dateCreated: Date;
// lastChangedBy: string;
// lastChangedOn: Date;
