import { Component } from '@angular/core';
import { PredictService } from '../services/predict.service';

@Component({
  selector: 'app-predict-reg-facility-admin',
  templateUrl: './predict-reg-facility-admin.component.html',
  styleUrls: ['./predict-reg-facility-admin.component.css']
})
export class PredictRegFacilityAdminComponent {

  formData = {
    Procedure_Cost: null,
    ICU_Stay: null,
    normal_Admission_Stay: null,
    Department_Type: null,
    Cost_Ratio: null,
    Stay_Ratio: null,
    Total_Stay: null,
    Cost_Per_Day: null,
    Procedure_Cost_Per_Day: null
  };

  prediction: number | null = null;
  errorMessage: string | null = null;

  constructor(private predictService: PredictService) {}

  submitForm(): void {
    this.predictService.predictXGBoost(this.formData).subscribe({
      next: (response) => {
        this.prediction = response.prediction;
        this.errorMessage = null;
      },
      error: (error) => {
        this.errorMessage = error.error?.error || 'An error occurred';
        this.prediction = null;
      }
    });
  }
}