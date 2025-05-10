import { Component } from '@angular/core';
import { PredictService } from '../services/predict.service';

@Component({
  selector: 'app-clustering',
  templateUrl: './clustering.component.html',
  styleUrls: ['./clustering.component.css']
})
export class ClusteringComponent {
  nbDiagnoses: number = 0;
  nbProcedures: number = 0;
  genderM: number = 1;  // 1 pour homme, 0 pour femme
  clusterResult: number | null = null;
  errorMessage: string | null = null;

  constructor(private predictService: PredictService) {}

  onSubmit(): void {
    const inputData = {
      Nb_Diagnoses: this.nbDiagnoses,
      Nb_Procedures: this.nbProcedures,
      Gender_M: this.genderM
    };

    this.predictService.predictClustering(inputData).subscribe({
      next: (res) => {
        this.clusterResult = res.cluster;
        this.errorMessage = null;
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Une erreur est survenue lors de la prédiction.';
        this.clusterResult = null;
      }
    });
  }
}
