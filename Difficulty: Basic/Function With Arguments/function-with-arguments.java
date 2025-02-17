//{ Driver Code Starts
// Initial Template for Java

import java.util.Scanner;

class Main {

    
// } Driver Code Ends
// User function Template for Java

// Write the complete argumentFunction below.
// The function should take two arguments a and b
// The function should return a+b
public static int argumentFunction(int a, int b){
    // Return the sum of the two arguments
    return a + b;
}



//{ Driver Code Starts.

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int t = scn.nextInt();
        while (t-- > 0) {
            int a = scn.nextInt();
            int b = scn.nextInt();
            int ans = argumentFunction(a, b);
            System.out.println(ans);

            System.out.println("~");
        }
        scn.close();
    }
}
// } Driver Code Ends