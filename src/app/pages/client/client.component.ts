import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from '../../../interfaces/client.interface';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss',
})
export class ClientComponent implements OnInit {
  clients: Client[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getClients();
  }
  getClients() {
    this.http
      .get<any>('https://api.prohelika.com/api/client')
      .subscribe((data) => {
        console.log('data', data);
        this.clients = data;
      });
  }
  deleteClient(id: string) {
    if (confirm('Are you sure you want to delete this client?')) {
      this.http
        .delete<any>('https://api.prohelika.com/api/client/' + id)
        .subscribe((data) => {
          console.log('data', data);
          this.getClients();
        });
    }
  }
}
