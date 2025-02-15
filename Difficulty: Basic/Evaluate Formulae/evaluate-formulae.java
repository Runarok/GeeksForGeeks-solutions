//{ Driver Code Starts
// Initial Template for Java

import java.util.Scanner;

class Main {

    
// } Driver Code Ends
// User function Template for Java

public static void evalute(int num1, int num2, int divisor, int addend) {
    // Calculating the result based on the given mathematical expression:
    int result = ((num1 + num2) / divisor) + addend;

    // Printing the computed result (Do not modify this line)
    System.out.println(result);
}


//{ Driver Code Starts.

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int t = scn.nextInt();
        while (t-- > 0) {
            int a = scn.nextInt();
            int b = scn.nextInt();
            int c = scn.nextInt();
            int d = scn.nextInt();
            evalute(a, b, c, d);

            System.out.println("~");
        }
        scn.close();
    }
}
// } Driver Code Ends