import { createSelector } from 'reselect';


export function getCmmData(state) {
  return state.cmmData;
}
export function getEmployees(state) {
  return state.employees;
}
export function getServices(state) {
  return state.services;
}
export function getJobs(state) {
  return state.jobs;
}
export function getEmployee(state) {
  return state.employee;
}
export function getService(state) {
  return state.service;
}
export function getJob(state) {
  return state.job;
}
// export function getEmployeeName(state) {
//   return getEmployees(state).name;
// }
// export function getServiceNames(state) {
//   return getServices(state).name;
// }
// export function getJobName(state) {
//   return getJobs(state).filter name;
// }

//=====================================
//  MEMOIZED SELECTORS\\\
//-------------------------------------
//
// export const getCmmDataTypes = createSelector(
//   getCmmDataList,
//   getCmmDataFilter,
//   (cmmdata, filter) => {
//     switch (filter) {
//       case 'employees':
//         return cmmdata.filter(cmmdata => cmmdata.employees);
//
//       case 'jobs':
//         return cmmdata.filter(cmmdata => cmmdata.jobs);
//
//       case 'services':
//         return cmmdata.filter(cmmdata => cmmdata.services);
//
//       default:
//         return cmmdata;
//     }
//   }
// );
