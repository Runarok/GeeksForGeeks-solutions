//{ Driver Code Starts
//Initial Template for Java
import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
    public static void main(String[] args) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while(T-->0)
        {
            String[] input = new String[2]; 
            input = br.readLine().split(" "); 
            int A = Integer.parseInt(input[0]); 
            int B = Integer.parseInt(input[1]); 
            Solution ob = new Solution();
            System.out.println(ob.minThirdPiles(A,B));
        }
    }
}

// } Driver Code Ends

//User function Template for Java

class Solution {
    
    // Function to check if a number is prime
    public static boolean isPrime(int n) {
        // Numbers less than or equal to 1 are not prime
        if (n <= 1) {
            return false;
        } 
        // 2 is a prime number
        else if (n == 2) {
            return true;
        } 
        // If the number is even, it's not prime
        else if (n % 2 == 0) {
            return false;
        } else {
            // Check for factors from 3 to sqrt(n)
            for (int i = 3; i <= (int) Math.sqrt(n); i += 2) {
                if (n % i == 0) {
                    return false;
                }
            }
        }
        return true; // n is prime if no factors are found
    }

    // Function to find the minimum number of additions to make the sum prime
    public int minThirdPiles(int A, int B) {
        int sum = A + B;  // Calculate the sum of A and B
        int count = 0;  // Initialize the count of additions
        
        // If the sum is already prime, make it larger to find the next prime
        if (isPrime(sum)) {
            sum = sum + 1;  // Increment sum by 1
            count++;  // Increment the count
        }

        // Keep incrementing the sum until it becomes a prime number
        while (!isPrime(sum)) {
            sum++;   // Increment sum by 1
            count++; // Increment the count of additions
        }
        
        return count; // Return the number of additions
    }
}
