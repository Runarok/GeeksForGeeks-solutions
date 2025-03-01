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
            long x = Integer.parseInt(read.readLine());
            Solution ob = new Solution();

            System.out.println(ob.isDeficient(x));
        }
    }
}
// } Driver Code Ends


// User function Template for Java
class Solution {
    // Function to check if a number is deficient
    static String isDeficient(long x){
        
        // Initialize divisorSum with the number itself
        long divisorSum = x;
        
        // Iterate through possible divisors and sum them
        for(long i = 1; i <= x / 2; i++){
            if(x % i == 0){
                divisorSum += i;
            }
        }
        
        // If the sum of divisors is less than twice the number, it's deficient
        if( divisorSum < 2 * x){
            return "YES";
        }
        
        // Otherwise, it's not deficient
        return "NO";
    }
}
