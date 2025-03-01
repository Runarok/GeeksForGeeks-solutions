//{ Driver Code Starts
//Initial Template for Java

import java.util.Scanner;

class Main {
    
    
// } Driver Code Ends

// User function Template for Java

public static void triangleWall(int size) {
    // Outer loop for each row
    for (int row = 1; row <= size; row++) {
        // Inner loop for printing '*' in each row
        for (int col = 1; col <= row; col++) {
            System.out.print("* ");
        }
        // Move to the next line after each row
        System.out.println();
    }
}



//{ Driver Code Starts.

    public static void main(String[] args)
    {
        Scanner scn = new Scanner(System.in);
        int t = scn.nextInt();
        while(t-- > 0) {
            int s = scn.nextInt();
            triangleWall(s);
        
System.out.println("~");
}
        scn.close();
    }
}
// } Driver Code Ends