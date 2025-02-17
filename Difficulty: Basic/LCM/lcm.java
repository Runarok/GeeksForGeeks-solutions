//{ Driver Code Starts
//Initial Template for Java

import java.util.Scanner;

class Main {
    
    
// } Driver Code Ends

public static int gcd(int a, int b) {
    // Using the Euclidean algorithm to compute the GCD.
    while (a > 0 && b > 0) {
        // Perform modulo operation to reduce the larger number.
        if (a > b) {
            a = a % b;
        } else {
            b = b % a;
        }
    }
    // If a is zero, then b is the GCD, otherwise a is the GCD.
    if (a == 0) {
        return b;
    }
    return a;
}

public static int LCM(int a, int b) {
    // Calculate the LCM using the relation: LCM(a, b) = (a * b) / GCD(a, b)
    int val = a * b;  // Calculate the product of a and b.
    int result = gcd(a, b);  // Get the GCD of a and b.
    int lcm = val / result;  // Divide the product by the GCD to get the LCM.
    return lcm;  // Return the LCM.
}


//{ Driver Code Starts.

    public static void main(String[] args)
    {
        Scanner scn = new Scanner(System.in);
        int t = scn.nextInt();
        while(t-- > 0) {
            int a = scn.nextInt();
            int b = scn.nextInt();
            System.out.println(LCM(a, b));
        
System.out.println("~");
}
        scn.close();
    }
}
// } Driver Code Ends