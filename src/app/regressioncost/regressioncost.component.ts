import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-regressioncost',
  templateUrl: './regressioncost.component.html',
  styleUrls: ['./regressioncost.component.css']
})
export class RegressioncostComponent {


  formData = {
    Facility_Cost: 0,
    Procedure_Cost: 0,
    ICU_Stay: 0,
    normal_Admission_Stay: 0,
    Department_Type: 0
  };

  prediction: number | null = null; // Résultat de la prédiction
  errorMessage: string | null = null; // Message d'erreur

  constructor(private http: HttpClient) {}

  // Fonction appelée lors de la soumission du formulaire
  submitForm() {
    this.http.post<any>('http://localhost:5000/predict_xgboost', this.formData).subscribe({
      next: (res) => {
        this.prediction = res.prediction; // Stocke la prédiction
        this.errorMessage = null; // Réinitialise les erreurs
      },
      error: (err) => {
        console.error('Erreur de prédiction :', err);
        this.errorMessage = 'Une erreur est survenue lors de la prédiction.';
        this.prediction = null;
      }
    });
  }
}