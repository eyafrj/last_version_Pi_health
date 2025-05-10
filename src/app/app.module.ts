import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { HttpClientModule } from '@angular/common/http'; // 👈 IMPORTANT
import { FormsModule } from '@angular/forms';

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
import { PowerbifinanceComponent } from './powerbifinance/powerbifinance.component';
import { PowerbistafComponent } from './powerbistaf/powerbistaf.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    MLComponent,
    DrugComponent,
    PredictRegressionComponent,
    PowerBiComponent,
    CNNComponent,
    ClusteringComponent,
    FormulaireComponent,
    RegressioncostComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    FormulairestaffComponent,
    MlstaffComponent,
    PredictRegressionstaffComponent,
    CnnstafComponent,
    FinancialComponent,
    RegressioncostfinanceComponent,
    PredictfinanceComponent,
    PredictRegFacilityComponent,
    PredictRegFacilityAdminComponent,
    PowerbifinanceComponent,
    PowerbistafComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule ,    
    BrowserModule,

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
