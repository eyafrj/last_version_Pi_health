import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './pages/charts/charts.component';
import { MLComponent } from './pages/ml/ml.component';
import { DrugComponent } from './drug/drug.component';
import { PredictRegressionComponent } from './predict-regression/predict-regression.component';
import { PowerBiComponent } from './power-bi/power-bi.component';
import { CNNComponent } from './cnn/cnn.component';
import { ClusteringComponent } from './clustering/clustering.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { RegressioncostComponent } from './regressioncost/regressioncost.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './guards/auth.guard';
import { UserComponent } from './user/user.component';
import { FormulairestaffComponent } from './formulairestaff/formulairestaff.component';
import { MlstaffComponent } from './mlstaff/mlstaff.component';
import { PredictRegressionstaffComponent } from './predict-regressionstaff/predict-regressionstaff.component';
import { CnnstafComponent } from './cnnstaf/cnnstaf.component';
import { FinancialComponent } from './financial/financial.component';
import { RegressioncostfinanceComponent } from './regressioncostfinance/regressioncostfinance.component';
import { PredictfinanceComponent } from './predictfinance/predictfinance.component';
import { PredictRegFacilityComponent } from './predict-reg-facility/predict-reg-facility.component';
import { PredictRegFacilityAdminComponent } from './predict-reg-facility-admin/predict-reg-facility-admin.component';
import { PowerbistafComponent } from './powerbistaf/powerbistaf.component';
import { PowerbifinanceComponent } from './powerbifinance/powerbifinance.component';

const routes: Routes = [
  { path: 'charts', component: ChartsComponent },
  { path: 'ML', component: MLComponent },
  { path: 'MLstaff', component: MlstaffComponent },

  { path: 'Drug', component: DrugComponent },
  { path: 'Predict', component: PredictRegressionComponent }, // Correction ici
  { path: 'Predictstaff', component: PredictRegressionstaffComponent }, // Correction ici
  { path: 'PredictRegFacility', component: PredictRegFacilityComponent }, // Correction ici
  { path: 'PredictRegFacilityAdmin', component: PredictRegFacilityAdminComponent }, // Correction ici
  { path: 'PowerBi', component: PowerBiComponent },
  { path: 'powerbistaf', component: PowerbistafComponent },
  { path: 'powerbifinance', component: PowerbifinanceComponent },

  { path: 'CNN', component: CNNComponent },
  { path: 'CNNstaf', component: CnnstafComponent },
  { path: 'Clustering', component: ClusteringComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'Predictfinance', component: PredictfinanceComponent },

  { path: 'formulairestaff', component: FormulairestaffComponent },
  { path: 'regressioncost', component: RegressioncostComponent },
  { path: 'regressioncostfinance', component: RegressioncostfinanceComponent },

  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'staff', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'financial', component: FinancialComponent, canActivate: [AuthGuard] }, // Nouvelle route

  { path: '', redirectTo: '/login', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }