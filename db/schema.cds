namespace uniq;

entity Employees {
  key ID: UUID;
  name: String;
  department: String;
  position: String;
}

entity Salaries {
  key ID: UUID;
  employeeID: UUID;
  amount: Decimal(10,2);
  currency: String;
  paidOn: Date;
}


