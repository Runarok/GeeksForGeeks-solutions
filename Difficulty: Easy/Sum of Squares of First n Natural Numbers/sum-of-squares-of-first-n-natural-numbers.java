//{ Driver Code Starts
// Initial Template for Java
import java.util.Scanner;


// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to calculate the sum of squares of the first 'number' natural numbers
    public int sumOfSquares(int number) {
        int sum = 0; // Variable to store the final sum
        
        // Loop through numbers from 1 to 'number' and add their squares
        for (int i = 1; i <= number; i++) {
            sum += i * i;
        }
        
        return sum;
    }
}


//{ Driver Code Starts.

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        Solution ob = new Solution();

        while (t-- > 0) {
            int number = sc.nextInt();
            int ans = ob.sumOfSquares(number);
            System.out.println(ans);
            System.out.println("~");
        }
        sc.close();
    }
}

// } Driver Code Ends