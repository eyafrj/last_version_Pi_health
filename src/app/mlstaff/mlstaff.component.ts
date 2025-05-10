import { Component } from '@angular/core';
import { PredictService } from '../services/predict.service';

@Component({
  selector: 'app-mlstaff',
  templateUrl: './mlstaff.component.html',
  styleUrls: ['./mlstaff.component.css']
})
export class MlstaffComponent {

  // Formulaire avec des données par défaut
  formData = {
    Admission_Count: 1,
    ICU_Admission: 0,
    Gender: 1,
    Bmi: 22.5,
    Weight: 70,
    Height: 1.75
  };

  prediction: number | null = null;  // Prédiction du modèle

  constructor(private mlService: PredictService) {}

  // Fonction appelée lors de la soumission du formulaire
  submitForm() {
    // Envoie des données au backend Flask
    this.mlService.predict(this.formData).subscribe({
      next: (res: any) => {
        // Affiche la prédiction reçue du backend
        this.prediction = res.prediction;
      },
      error: (err) => {
        console.error('Erreur de prédiction :', err);
        this.prediction = null;
      }
    });
  }
}
