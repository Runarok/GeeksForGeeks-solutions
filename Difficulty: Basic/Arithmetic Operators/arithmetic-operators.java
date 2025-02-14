//{ Driver Code Starts
// Initial Template for Java

import java.util.Scanner;

class Main {

    
// } Driver Code Ends
// User function Template for Java
public static void operations(int x, int y) {
    // Perform addition x + y
    int p = x + y;
    
    // Perform subtraction x - y
    int q = x - y;
    
    // Perform multiplication x * y
    int r = x * y;
    
    // Perform division x / y (ensure y != 0 to avoid ArithmeticException)
    int s = 0;
    if (y != 0) {
        s = x / y;
    }
    
    // Perform modulo operation x % y (ensure y != 0 to avoid ArithmeticException)
    int t = 0;
    if (y != 0) {
        t = x % y;
    }
    
    // The below code prints the output. Don't change it!
    System.out.println(p + " " + q + " " + r + " " + s + " " + t);
}


//{ Driver Code Starts.

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int t = scn.nextInt();
        while (t-- > 0) {
            int x = scn.nextInt();
            int y = scn.nextInt();
            operations(x, y);

            System.out.println("~");
        }
        scn.close();
    }
}
// } Driver Code Ends