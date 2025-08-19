import { Routes } from '@angular/router';
import { ShowPatient } from './components/patient/show-patient/show-patient';
import { ShowHistory } from './components/visualhistory/show-history/show-history';
import { ShowAppointment } from './components/appointment/show-appointment/show-appointment';
import { ShowOptometry } from './components/optometry/show-optometry/show-optometry';
import { ShowVisualExam } from './components/visual-exam/show-visual-exam/show-visual-exam';
import { ShowFrames } from './components/frames/show-frames/show-frames';
import { ShowLenses } from './components/lenses/show-lenses/show-lenses';
import { ShowOrden } from './components/orden/show-orden/show-orden';
import { ShowOrderDetail } from './components/order-detail/show-order-detail/show-order-detail';
import { ShowSupplier } from './components/supplier/show-supplier/show-supplier';
import { ShowPayment } from './components/payment/show-payment/show-payment';
import { ShowDelivery } from './components/delivery/show-delivery/show-delivery';

export const routes: Routes = [
  { 
        path: '', 
        redirectTo: '/', 
        pathMatch: 'full' 
    },
  {
    path: 'pacient',
    component: ShowPatient
  },

  {
    path: 'visualhistory',
    component: ShowHistory
  },

  {
    path: 'appointment',
    component: ShowAppointment
  },
  {
    path: 'optometry',
    component: ShowOptometry
  },
  {
    path: 'visual-exam',
    component: ShowVisualExam
  },
  {
    path: 'frames',
    component: ShowFrames
  },
  {
    path: 'lenses',
    component: ShowLenses
  },
    {
    path: 'orden',
    component: ShowOrden
  },
  {
    path: 'order-detail',
    component: ShowOrderDetail
  },
  {
    path: 'supplier',
    component: ShowSupplier
  },
  {
    path: 'payment',
    component: ShowPayment
  },
  {
    path: 'delivery',
    component: ShowDelivery
  },

];