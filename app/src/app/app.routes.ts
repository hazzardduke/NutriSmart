import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonalrecordComponent } from './personalrecord/personalrecord.component';
import { GoalsComponent } from './goals/goals.component';
import { AppoimentsComponent } from './appoiments/appoiments.component';
import { FidelityManagementComponent } from './fidelity-management/fidelity-management.component';
import { NutritionalPlanComponent } from './nutritional-plan/nutritional-plan.component';
import { AppointmentManagementComponent } from './appointment-management/appointment-management.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { ClientManagementComponent } from './client-management/client-management.component';
import { RegisterComponent } from './register/register.component';



export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard-admin', component: DashboardAdminComponent },
  { path: 'profile', component: PersonalrecordComponent },
  { path: 'goals', component: GoalsComponent },
  { path: 'appoiments', component: AppoimentsComponent },
  { path: 'fidelity-management', component: FidelityManagementComponent },
  { path: 'nutrional-plan', component: NutritionalPlanComponent },
  { path: 'appoiments-managment', component:  AppointmentManagementComponent},
  { path: 'loyaltycard', loadComponent: () => import('./loyaltycard/loyaltycard.component').then(m => m.LoyaltyCardComponent)},
  { path: 'client-management', component: ClientManagementComponent},
];
