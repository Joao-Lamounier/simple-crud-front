import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  standalone: true,
  imports: [ErrorDialogComponent],
  templateUrl: './error-dialog.component.html',
  styleUrl: './error-dialog.component.scss',
})
export class ErrorDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<ErrorDialogComponent>
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
