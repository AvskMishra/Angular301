import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmationModalComponent } from '../../components/modals/confirmation-modal/confirmation-modal.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-payment-booking',
  templateUrl: './payment-booking.component.html',
  styleUrls: ['./payment-booking.component.scss']
})
export class PaymentBookingComponent  {
  firstParam;
  secondParam;
  thirdParam;
  fourthParam;
  fiveParam;
  constructor(public dialog: MatDialog, private route: ActivatedRoute) {
    this.firstParam = this.route.snapshot.params.movieTitle;
    this.secondParam = this.route.snapshot.params.theatre;
    this.thirdParam = this.route.snapshot.params.time;
    this.fourthParam = this.route.snapshot.params.seat;
    this.fiveParam = this.route.snapshot.params.total;
  }
  openConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      disableClose: true,
      data: {
        name: this.firstParam, theater: this.secondParam,
        time: this.thirdParam, seat: this.fourthParam, total: this.fiveParam
      }
    });
  }
}


