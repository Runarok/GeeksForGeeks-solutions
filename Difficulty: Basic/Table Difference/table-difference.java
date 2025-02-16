//{ Driver Code Starts
//Initial Template for Java

import java.util.Scanner;

class Main {

    
// } Driver Code Ends

// User function Template for Java

public static void difference(int n1, int n2) {
    // Loop through numbers 1 to 10 and print the difference of their multiples
    for (int i = 1; i <= 10; i++) {
        System.out.print((n1 * i) - (n2 * i) + " ");
    }
}


//{ Driver Code Starts.

    public static void main(String[] args)
    {
        Scanner scn = new Scanner(System.in);
        int t = scn.nextInt();
        while(t-- > 0) {
            int n1 = scn.nextInt();
            int n2 = scn.nextInt();
            difference(n1, n2);
            System.out.println();
        
System.out.println("~");
}
        scn.close();
    }
}
// } Driver Code Ends