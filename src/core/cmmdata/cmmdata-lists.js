import { FirebaseList } from 'src/core/firebase';
import * as cmmDataActions from './actions';
import { Employees, Jobs, Services } from './cmmdata-types';


// export const cmmdatalist = new FirebaseList({
//   onLoad: cmmDataActions.loadCmmdataSuccess()
// }, CMMData);
export const employeesList = new FirebaseList({
  onLoad: cmmDataActions.loadCmmdataEmployeesSuccess()
}, Employees);
export const jobsList = new FirebaseList({
  onLoad: cmmDataActions.loadCmmdataJobsSuccess()
}, Jobs);
export const servicesList = new FirebaseList({
  onLoad: cmmDataActions.loadCmmdataServicesSuccess()
}, Services);

