#{ 
 # Driver Code Starts
#Initial Template for Python 3


# } Driver Code Ends
#User function Template for python3
# Implement Employee and SalesEmployee class

class Employee:
    def __init__(self, id, salary):
        # Initializing the employee with an ID and salary
        self.id = id
        self.salary = salary
        
    def get_info(self):
        # Method to return employee's ID and salary as a formatted string
        return f"EmployeeID:{self.id} Salary:{self.salary}"

class SalesEmployee(Employee):
    def __init__(self, id, salary, sales=0):
        # Initializing SalesEmployee with ID, salary and optional sales data
        super().__init__(id, salary)
        self.sales = sales
        
    def get_info(self):
        # Method to return sales employee's ID, salary and sales as a formatted string
        return f"EmployeeID:{self.id} Salary:{self.salary} Sales:{self.sales}"


#{ 
 # Driver Code Starts.

# Example usage
if __name__ == "__main__":
    t = int(input())
    while t:
        t-=1
        id = int(input())
        salary = int(input())
        sales = int(input())
        # Create an Employee object
        employee = Employee(id, salary)
        # Create a SalesEmployee object with default sales
        sales_employee = SalesEmployee(id, salary, sales)
        if isinstance(sales_employee,Employee):
            print(employee.get_info())
            print(sales_employee.get_info())
        else:
            print("sales_employee doesnt inherit Employee class")
        print('~')
# } Driver Code Ends