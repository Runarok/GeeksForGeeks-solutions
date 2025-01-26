#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# Base class
class Employee:
    def __init__(self, id, salary):
        self.id = id
        self.salary = salary

    def display_employee(self):
        print(self.id, self.salary)

# Subclass inheriting from Employee
class SalesEmployee(Employee):
    def __init__(self, id, salary, sales):
        # Call the parent class (Employee) constructor to initialize id and salary
        super().__init__(id, salary)
        self.sales = sales

    def display_sales_employee(self):
        print(self.id, self.salary, self.sales)


#{ 
 # Driver Code Starts.

if __name__ == "__main__":
    t=int(input())
    while t:
        t-=1
        emp_id = int(input())
        emp_salary = int(input())
        emp_sales = int(input())
    
        # Create an Employee object
        employee = Employee(emp_id, emp_salary)
        print(f"{employee.id} {employee.salary}")
    
        # Create a SalesEmployee object
        sales_employee = SalesEmployee(emp_id, emp_salary, emp_sales)
        print(f"{sales_employee.id} {sales_employee.salary} {sales_employee.sales}")
# } Driver Code Ends