//{ Driver Code Starts
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t;
        t = Integer.parseInt(br.readLine());
        while(t-- > 0){
            
            int n;
            n = Integer.parseInt(br.readLine());
            
            Solution obj = new Solution();
            String res = obj.isPrime(n);
            
            System.out.println(res);
            
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

class Solution {
    // Function to check if a number is prime
    public static String isPrime(int n) {
        // If the number is 1, it is not prime
        if(n == 1){
            return "No";
        }

        // Loop through numbers from 2 to n-1 to check if any divides n
        for(int i = 2; i < n; i++){
            // If a divisor is found, n is not prime
            if(n % i == 0){
                return "No";
            }
        }

        // If no divisors are found, n is prime
        return "Yes";
    }
}
