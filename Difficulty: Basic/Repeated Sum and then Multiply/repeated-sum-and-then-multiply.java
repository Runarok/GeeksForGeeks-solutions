//{ Driver Code Starts
//Initial Template for Java
import java.util.*;
import java.io.*;
class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            int n = Integer.parseInt(read.readLine());
            Solution ob = new Solution();

            System.out.println(ob.repeatedSumMul(n));
        }
    }
}
// } Driver Code Ends

// User function Template for Java
class Solution {
    
    // Function to calculate the sum of digits of a number
    static int sumOfDigits(int number) {
        int digitSum = 0;
        
        while (number > 0) {
            int lastDigit = number % 10; // Extract the last digit
            digitSum += lastDigit; // Add it to the sum
            number /= 10; // Remove the last digit
        }
        
        return digitSum;
    }

    // Function to compute the repeated sum multiplication
    static int repeatedSumMul(int number) {
        // If the number is already a single digit, return it
        if (number >= 1 && number < 10) {
            return number;
        } else {
            // Compute the sum of digits
            int digitSum = sumOfDigits(number);
            
            // Keep reducing the sum until it becomes a single digit
            while (sumOfDigits(digitSum) > 9) {
                digitSum = sumOfDigits(digitSum);
            }
            
            // Extract the last two digits and multiply them
            int lastDigit = digitSum % 10;
            digitSum /= 10;
            int secondLastDigit = digitSum % 10;
            
            return lastDigit * secondLastDigit;
        }
    }
}
