import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-client-add',
  standalone: true,
  imports: [],
  templateUrl: './client-add.component.html',
  styleUrl: './client-add.component.scss',
})
export class ClientAddComponent {
  postData: any = {};

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    // Send HTTP POST request to your backend API
    this.http.post<any>('YOUR_BACKEND_API_URL', this.postData).subscribe(
      (response) => {
        console.log('Data posted successfully:', response);
        // Optionally, you can reset the form here
        this.resetForm();
      },
      (error) => {
        console.error('Error posting data:', error);
      }
    );
  }

  resetForm(): void {
    this.postData = {};
  }
}
