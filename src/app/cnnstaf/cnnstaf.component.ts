import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cnnstaf',
  templateUrl: './cnnstaf.component.html',
  styleUrls: ['./cnnstaf.component.css']
})
export class CnnstafComponent {





  fileToUpload: File | null = null;
  prediction: string | null = null;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  // Gérer le changement de fichier
  onFileChange(event: any): void {
    this.fileToUpload = event.target.files[0];
  }

  // Soumettre le formulaire pour prédire
  onSubmit(): void {
    if (!this.fileToUpload) {
      this.error = "Veuillez sélectionner un fichier.";
      return;
    }

    this.error = null;

    const formData = new FormData();
    formData.append('file', this.fileToUpload, this.fileToUpload.name);

    // Envoyer l'image à l'API Flask pour la prédiction
    this.http.post<{ prediction: string }>('http://localhost:5000/predict_cnn', formData)
      .subscribe({
        next: (response) => {
          this.prediction = response.prediction;
        },
        error: (err) => {
          this.error = 'Erreur lors de la prédiction : ' + err.message;
        }
      });
  }}
