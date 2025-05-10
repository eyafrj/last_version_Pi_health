import { Component } from '@angular/core';
import { PredictService } from '../services/predict.service';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.css']
})
export class DrugComponent {
  // Formulaire avec des données par défaut pour la prédiction de médicament
  formData = {
    dose_val_rx: 100,
    route: 'IV',
    Gender: 'M',
   
    Weight: 70,
    Bmi: 22
  };

  predictedDrugType: string | null = null;  // Prédiction du type de médicament
  errorMessage: string | null = null;      // Message d'erreur

  constructor(private predictService: PredictService) {}

  // Fonction appelée lors de la soumission du formulaire
  submitForm() {
    this.predictService.predictDrug(this.formData).subscribe({
      next: (res: any) => {
        // Affiche la prédiction reçue du backend
        this.predictedDrugType = res.prediction;
        this.errorMessage = null; // Réinitialise les erreurs
      },
      error: (err: any) => {
        console.error('Erreur de prédiction du médicament :', err);
        this.errorMessage = 'Une erreur est survenue lors de la prédiction.';
        this.predictedDrugType = null;
      }
    });
  }
}