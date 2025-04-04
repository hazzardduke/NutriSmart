import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonalrecordComponent } from './personalrecord/personalrecord.component';
import { GoalsComponent } from './goals/goals.component';
import { AppoimentsComponent } from './appoiments/appoiments.component';
import { FidelityManagementComponent } from './fidelity-management/fidelity-management.component';


export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: PersonalrecordComponent },
  { path: 'goals', component: GoalsComponent },
  { path: 'appoiments', component: AppoimentsComponent },
  { path: 'fidelity-management', component: FidelityManagementComponent },
  {path: 'loyaltycard', loadComponent: () => import('./loyaltycard/loyaltycard.component').then(m => m.LoyaltyCardComponent)}
];
