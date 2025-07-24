using { uniq as db } from '../db/schema';

service HRService @(requires: 'authenticated-user')
{
  @readonly entity Employees as projection on db.Employees;

  entity Salaries @(restrict: [
      { grant:'READ', to:'Viewer'},
      { grant:'*', to:'HRAdmin'}
  ]) as projection on db.Salaries;

}
