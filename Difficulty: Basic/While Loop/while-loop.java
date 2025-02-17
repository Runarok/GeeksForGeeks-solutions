//{ Driver Code Starts
//Initial Template for Java

import java.util.Scanner;

class Main {

    
// } Driver Code Ends
//User function Template for Java
public static void utility(int x) {
   
   // Print numbers from x down to 0 (inclusive) with a space in between
   while (x >= 0) {
       
       // Print the current value of x followed by a space
       System.out.print(x + " ");
       
       // Decrement the value of x for the next iteration
       x--;
   }
}


//{ Driver Code Starts.

    public static void main(String[] args)
    {
        Scanner scn = new Scanner(System.in);
        int t = scn.nextInt();
        while(t-- > 0) {
            int x = scn.nextInt();
            utility(x);
            System.out.println();
        
System.out.println("~");
}
        scn.close();
    }
}
// } Driver Code Ends