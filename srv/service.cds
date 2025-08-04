using { uniq as db } from '../db/schema';
//@(requires: 'authenticated-user')
service HRService @(requires: 'authenticated-user')
{
  @readonly entity Employees as projection on db.Employees;

  entity Salaries @(restrict: [
      { grant:'READ', to:'Viewer'},
      { grant:'READ', to:'HRAdmin'},
      { grant:'WRITE', to:'HRAdmin'}
  ]) as projection on db.Salaries;

}
