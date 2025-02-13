//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0){
            int N = Integer.parseInt(in.readLine());
            
            Solution ob = new Solution();
            System.out.println(ob.countOfNumbers(N));
        }
    }
}
// } Driver Code Ends

// User function Template for Java
class Solution {
    // Function to calculate the sum of digits of a number
    static int sumOfDigits(int n) {
        int sum = 0;
        while (n > 0) {
            int remainder = n % 10;
            sum += remainder;
            n /= 10;
        }
        return sum;
    }

    // Function to count the numbers satisfying the given condition
    static int countOfNumbers(int N) {
        int count = 0;

        // Iterate through possible values to check the condition
        for (int i = Math.max(1, N - 97); i <= N; i++) {
            if (i + sumOfDigits(i) + sumOfDigits(sumOfDigits(i)) == N) {
                count++;
            }
        }

        return count;
    }
}
