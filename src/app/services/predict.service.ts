import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredictService {
  private knnApiUrl = 'http://localhost:5000/predict';  // L'URL de ton API Flask pour le modèle KNN
  private drugApiUrl = 'http://localhost:5000/predict_drug';  // L'URL de ton API Flask pour la prédiction du médicament
  private apiUrl = 'http://127.0.0.1:5000'; // URL de l'API Flask

  constructor(private http: HttpClient) {}

  // Fonction pour envoyer les données au backend Flask pour le modèle KNN
  predict(data: any) {
    return this.http.post(this.knnApiUrl, data);
  }

  // Fonction pour envoyer les données au backend Flask pour la prédiction du médicament
  predictDrug(data: any) {
    return this.http.post(this.drugApiUrl, data);
  }

  // Fonction pour envoyer les données au backend Flask pour la régression
  predictRegression(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/predict_regression`, data);
  }

  // Prédiction de clustering (KMeans)
  predictClustering(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/predict_clustering`, data);
  }

  // Prédiction via XGBoost
  predictXGBoost(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/predict_xgboostt`, data);
  }
}