import { Cmmdata } from 'src/core/cmmdata';
import { getDeletedCmmdata } from './selectors';
import { cmmDataList, employeesList, jobsList, servicesList } from './cmmdata-lists';
import {
  SET_EMPLOYEE_SUCCESS,
  SET_JOB_SUCCESS,
  SET_SERVICE_SUCCESS,
  LOAD_CMMDATA_EMPLOYEES_SUCCESS,
  LOAD_CMMDATA_JOBS_SUCCESS,
  LOAD_CMMDATA_SERVICES_SUCCESS,
  LOAD_CMMDATA_SUCCESS,
  UNLOAD_CMMDATA_SUCCESS,
  UNLOAD_CMMDATA_EMPLOYEES_SUCCESS,
  UNLOAD_CMMDATA_JOBS_SUCCESS,
  UNLOAD_CMMDATA_SERVICES_SUCCESS
} from './action-types';

export function setupCmmdataWith(employees, jobs, services) {
    return new Cmmdata({employees: employees, jobs: jobs, services: services})
}
export function setupNewCmmdata() {
  return new Cmmdata({employees: null, jobs: null, services: null})
}

export function loadCmmdata() {
  consol.log('loading cmm')
  return (dispatch, getstate) => {
    const { auth } = getState();
    cmmDataList.path = `cmmdata`;
    cmmDataList.subscribe(dispatch);
console.log('loaded')
  };
}
export function loadCmmdataSuccess(cmmdata) {
  console.log('success?');
  console.debug(cmmdata);
  return {
    // type: LOAD_CMMDATA_SUCCESS
  };
}

export function unloadCmmdata() {
  cmmDataList.unsubscribe();
  return {
    type: UNLOAD_CMMDATA_SUCCESS
  };
}
export function loadCmmdataJobs() {
  return (dispatch, getState) => {
    const { auth } = getState();
    jobsList.path = `cmmdata/jobs`;
    jobsList.subscribe(dispatch);
  };
}
export function loadCmmdataJobsSuccess(jobsdata) {
  return {
    type: LOAD_CMMDATA_JOBS_SUCCESS,
    payload: jobsdata
  };
}

export function unloadCmmdataJobs() {
  jobsList.unsubscribe();
  return {
    type: UNLOAD_CMMDATA_JOBS_SUCCESS
  };
}
export function loadCmmdataEmployees() {
  return (dispatch, getState) => {
    const { auth } = getState();
    employeesList.path = `cmmdata/employees`;
    employeesList.subscribe(dispatch);
  };
}
export function loadCmmdataEmployeesSuccess(employeeData) {
  return {
    type: LOAD_CMMDATA_EMPLOYEES_SUCCESS,
    payload: employeeData
  };
}

export function unloadCmmdataEmployees() {
  employeesList.unsubscribe();
  return {
    type: UNLOAD_CMMDATA_EMPLOYEES_SUCCESS
  };
}
export function loadCmmdataServices() {
  return (dispatch, getState) => {
    const { auth } = getState();
    servicesList.path = `cmmdata/service_item_list`;
    servicesList.subscribe(dispatch);
  };
}
export function loadCmmdataServicesSuccess(serviceData) {
  return {
    type: LOAD_CMMDATA_SERVICES_SUCCESS,
    payload: serviceData
  };
}

export function unloadCmmdataServices() {
  servicesList.unsubscribe();
  return {
    type: UNLOAD_CMMDATA_SERVICES_SUCCESS
  };
}

export function setEmployee(employee) {
  return {
    type: SET_EMPLOYEE_SUCCESS,
    payload: employee
  };
}
export function setService(service) {
  return {
    type: SET_SERVICE_SUCCESS,
    payload: service
  };
}
export function setJob(job) {
  return {
    type: SET_JOB_SUCCESS,
    payload: job
  };
}
