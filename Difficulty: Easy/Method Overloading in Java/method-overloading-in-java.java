//{ Driver Code Starts
// Initial Template for Java
import java.util.*;


// } Driver Code Ends

// User function Template for Java

// Calculator class with method overloading for sum operations
class Calculator {
    
    // Method to calculate the sum of two integers
    int sum(int a, int b) {
        return a + b;
    }
    
    // Method to calculate the sum of three integers
    int sum(int a, int b, int c) {
        return a + b + c;
    }
    
    // Method to calculate the sum of two double values
    double sum(double a, double b) {
        return a + b;
    }
}


//{ Driver Code Starts.

public class GFG {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int tc = Integer.parseInt(sc.nextLine());
        while (tc-- > 0) {
            int a = Integer.parseInt(sc.nextLine());
            int b = Integer.parseInt(sc.nextLine());
            int c = Integer.parseInt(sc.nextLine());
            double x = Double.parseDouble(sc.nextLine());
            double y = Double.parseDouble(sc.nextLine());
            Calculator calc = new Calculator();
            System.out.println(calc.sum(a, b));
            System.out.println(calc.sum(a, b, c));
            System.out.println(calc.sum(x, y));
        }
    }
}
// } Driver Code Ends