//{ Driver Code Starts
// Initial Template for Java
import java.util.*;


// } Driver Code Ends

// User function Template for Java

// Base class representing a generic Employee
class Employee {
    int id;      // Employee ID
    int salary;  // Employee salary

    // Constructor to initialize Employee attributes
    Employee(int id, int salary) {
        this.id = id;
        this.salary = salary;
    }
}

// Derived class representing a Sales Employee
class SalesEmployee extends Employee {
    int sales;  // Number of sales made by the employee

    // Constructor to initialize SalesEmployee attributes
    SalesEmployee(int id, int salary, int sales) {
        super(id, salary);  // Call the superclass constructor
        this.sales = sales;
    }
}



//{ Driver Code Starts.

public class GFG {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int tc = Integer.parseInt(sc.nextLine());
        while (tc-- > 0) {
            int id = Integer.parseInt(sc.nextLine());
            int salary = Integer.parseInt(sc.nextLine());
            int sales = Integer.parseInt(sc.nextLine());
            Employee emp = new Employee(id, salary);
            System.out.println(emp.id + " " + emp.salary);
            SalesEmployee sEmp = new SalesEmployee(id, salary, sales);
            System.out.println(sEmp.id + " " + sEmp.salary + " " + sEmp.sales);
        }
    }
}
// } Driver Code Ends