//{ Driver Code Starts
//Initial Template for Java

import java.util.Scanner;

class Main {

    
// } Driver Code Ends

// User function Template for Java

public static void utility(int n) {
    
    // Loop from 1 to 10 to print the multiples of n
    for (int i = 1; i <= 10; i++) {
        // Print the current multiple of n, followed by a space
        System.out.print(n * i + " ");
    }
}


//{ Driver Code Starts.

    public static void main(String[] args)
    {
        Scanner scn = new Scanner(System.in);
        int t = scn.nextInt();
        while(t-- > 0) {
            int n = scn.nextInt();
            utility(n);
            System.out.println();
        
System.out.println("~");
}
        scn.close();
    }
}
// } Driver Code Ends