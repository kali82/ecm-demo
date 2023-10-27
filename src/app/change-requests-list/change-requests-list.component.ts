import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-change-requests-list',
  templateUrl: './change-requests-list.component.html',
  styleUrls: ['./change-requests-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChangeRequestsListComponent {
  receivedDataFromChild: string = '';

  onDataReceived(data: string) {
    this.receivedDataFromChild = data;
  }
}
