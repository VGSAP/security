//If i want custom error message, then i need to remove the @readonly annotation, only then will this custom error msg will be displayed.
//Because, when entity defined with the annotation at the CDS model level, the CAP runtime immediately rejects any write operations.

/*
module.exports = cds.service.impl(async function() {
  const { Employees } = this.entities;
  this.before(['CREATE', 'UPDATE', 'DELETE'], Employees, (req) => {
    const xsappname = 'securityDemo-9f972698trial-dev!t494807'; 
    const hrAdminScope = `${xsappname}.HRAdmin`; 
    if (!req.user.is(hrAdminScope)) { 
      req.error({
        code: 'ENTITY_IS_READ_ONLY', // You can choose a custom error code here
        message: 'The Employees entity is read-only. You cannot perform write operations on it. Please contact your HR administrator.'
      });
    }
  });
});
*/