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
            int n = Integer.parseInt(in.readLine());
            
            Solution ob = new Solution();
            List<Integer> ans = new ArrayList<Integer>();
            ans = ob.orderedPrime(n);
            for(int i = 0;i < ans.size()-1;i++)
                System.out.print(ans.get(i)+" ");
            System.out.println(); 
            System.out.println(ans.get(ans.size()-1));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution{
    
    // Function to return a list of ordered prime factors and their multiplicities
    static List<Integer> orderedPrime(int n) {
        List<Integer> ans = new ArrayList<>();  // List to store prime factors
        int count = 0, mul = 1;  // Variables to count multiplicities and product of multiplicities
        
        // Iterate over all possible divisors from 2 to n
        for (int i = 2; i <= n; i++) {
            if (n % i == 0) {  // If i is a divisor of n
                int j = 1;  // To count the multiplicity of the prime factor
                // Keep dividing n by i to find the multiplicity of i
                while (n % i == 0) {
                    n /= i;
                    j++;
                }
                ans.add(j - 1);  // Add multiplicity to the list (subtract 1 since j is incremented after the last division)
                mul *= j;  // Multiply the multiplicity to get the product
            }
        }
        
        // Sort the list of prime factor multiplicities in ascending order
        Collections.sort(ans);
        
        // Add the product of multiplicities to the end of the list
        ans.add(mul);
        
        return ans;  // Return the final list
    }
}
