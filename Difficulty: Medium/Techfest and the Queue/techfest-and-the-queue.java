//{ Driver Code Starts
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t;
        t = Integer.parseInt(br.readLine());
        while(t-- > 0){
            
            long a;
            a = Long.parseLong(br.readLine().trim());
            
            
            long b;
            b = Long.parseLong(br.readLine().trim());
            
            Solution obj = new Solution();
            long res = obj.sumOfPowers(a, b);
            
            System.out.println(res);
            
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

class Solution {
    // Function to calculate the sum of powers of prime factors for all numbers in the range [a, b]
    static long sum(long n) {
        long s = 0;  // Variable to store the sum of powers of prime factors
        if (n <= 1) return 0;  // If n is less than or equal to 1, return 0 as no prime factors exist
        
        // Count sum of all powers of 2
        while (n % 2 == 0) {
            s += 1;  // Add to the sum for each division by 2
            n /= 2;  // Divide by 2
        }
        
        // Count sum of all powers of 3
        while (n % 3 == 0) {
            s += 1;  // Add to the sum for each division by 3
            n /= 3;  // Divide by 3
        }
        
        // Count sum of powers of other prime factors (starting from 5)
        for (int i = 5; i * i <= n; i += 6) {
            while (n % i == 0) {
                s += 1;  // Add to the sum for each division by i (where i is a prime factor)
                n /= i;  // Divide by i
            }
            while (n % (i + 2) == 0) {
                s += 1;  // Add to the sum for each division by i + 2
                n /= (i + 2);  // Divide by i + 2
            }
        }
        
        // This condition checks for prime numbers greater than 3
        if (n > 3) s += 1;  // If n is a prime number greater than 3, add 1 to the sum
        
        return s;  // Return the sum of powers of prime factors
    }

    // Function to calculate the sum of powers of prime factors for all numbers in the range [a, b]
    public static long sumOfPowers(long a, long b) {
        long res = 0;  // Variable to store the total sum
        for (long x = a; x <= b; x++) {
            res += sum(x);  // Add the sum of powers of prime factors for each number in the range
        }
        return res;  // Return the total sum
    }
}
