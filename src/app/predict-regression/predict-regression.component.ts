import { Component } from '@angular/core';
import { PredictService } from '../services/predict.service';
@Component({
  selector: 'app-predict-regression',
  templateUrl: './predict-regression.component.html',
  styleUrls: ['./predict-regression.component.css']
})
export class PredictRegressionComponent {




  formData = {
  
    Weight: 70,
    Height: 1.75,
    Bmi: 22.5,
    Gender_M: 1
  };

  prediction: number | null = null; // Résultat de la prédiction
  errorMessage: string | null = null; // Message d'erreur

  constructor(private predictService: PredictService) {}

  // Fonction appelée lors de la soumission du formulaire
  submitForm() {
    this.predictService.predictRegression(this.formData).subscribe({
      next: (res: any) => {
        this.prediction = res.prediction; // Stocke la prédiction
        this.errorMessage = null; // Réinitialise les erreurs
      },
      error: (err: any) => {
        console.error('Erreur de prédiction de régression :', err);
        this.errorMessage = 'Une erreur est survenue lors de la prédiction.';
        this.prediction = null;
      }
    });
  }
}