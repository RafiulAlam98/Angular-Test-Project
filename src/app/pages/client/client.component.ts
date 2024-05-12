import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from '../../../interfaces/client.interface';
import { ConfirmationModalComponent } from '../../components/common/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [ConfirmationModalComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss',
})
export class ClientComponent implements OnInit {
  clients: Client[] = [];

  isConfirmationModalOpen: boolean = false;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getClients();
  }

  // Get All Clients
  getClients() {
    this.http
      .get<any>('https://api.prohelika.com/api/client')
      .subscribe((data) => {
        console.log('data', data);
        this.clients = data;
      });
  }

  openConfirmationModal(): void {
    this.isConfirmationModalOpen = true;
  }

  handleConfirmation(confirmed: boolean): void {
    if (confirmed) {
    }
    this.isConfirmationModalOpen = false;
  }

  // Delete Clients
  deleteClient(id: string) {
    this.http
      .delete<any>('https://api.prohelika.com/api/client/' + id)
      .subscribe((data) => {
        console.log('data', data);
        this.getClients();
      });
  }
}
