//{ Driver Code Starts
// Initial Template for Java

import java.util.Scanner;

class Main {

    
// } Driver Code Ends

// User function Template for Java

public static int apTerm(int a, int d, int n) {
    // Formula for the nth term of an arithmetic progression
    int ans = a + (n - 1) * d;
    
    // Return the calculated nth term
    return ans;
}


//{ Driver Code Starts.

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int t = scn.nextInt();
        while (t-- > 0) {
            int a = scn.nextInt();
            int d = scn.nextInt();
            int n = scn.nextInt();
            System.out.println(apTerm(a, d, n));
        }
        scn.close();
    }
}
// } Driver Code Ends