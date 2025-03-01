//{ Driver Code Starts
// Initial Template for Java

import java.util.Scanner;

class Main {

    
// } Driver Code Ends

// User function Template for Java

public static int countDigits(int n) {
    // Initialize a counter for the number of digits
    int count = 0;

    // Loop until the number becomes 0
    while (n > 0) {
        // Divide n by 10 to remove the last digit
        n = n / 10;
        // Increment the digit count
        count = count + 1;
    }

    // Return the total count of digits
    return count;
}



//{ Driver Code Starts.

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int t = scn.nextInt();
        while (t-- > 0) {
            int n = scn.nextInt();
            System.out.println(countDigits(n));

            System.out.println("~");
        }
        scn.close();
    }
}
// } Driver Code Ends