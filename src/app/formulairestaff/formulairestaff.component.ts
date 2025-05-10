import { Component } from '@angular/core';
import { PredictService } from '../services/predict.service';
declare var window: any;
@Component({
  selector: 'app-formulairestaff',
  templateUrl: './formulairestaff.component.html',
  styleUrls: ['./formulairestaff.component.css']
})
export class FormulairestaffComponent {



  formData = {
    dose_val_rx: 100,
    route: 'IV',
    Gender: 'M',
    Weight: 70,
    Bmi: 22
  };

  predictedDrugType: string | null = null;
  errorMessage: string | null = null;
  showModal: boolean = false; // Variable pour contrôler la visibilité de la modal

  constructor(private predictService: PredictService) {}

  submitForm() {
    this.predictService.predictDrug(this.formData).subscribe({
      next: (res: any) => {
        this.predictedDrugType = res.prediction;
        this.errorMessage = null;
        this.showModal = true; // Affiche la modale avec la prédiction
      },
      error: (err: any) => {
        console.error('Erreur de prédiction du médicament :', err);
        this.errorMessage = 'Une erreur est survenue lors de la prédiction.';
        this.predictedDrugType = null;
      }
    });
  }

  // Méthode pour fermer la modal
  closeModal() {
    this.showModal = false; // Cache la modale
  }
}
