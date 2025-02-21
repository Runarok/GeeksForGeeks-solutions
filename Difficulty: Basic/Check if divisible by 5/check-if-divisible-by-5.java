//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0)
        {
            String N = read.readLine();

            Solution ob = new Solution();
            System.out.println(ob.divisibleBy5(N));
        }
    }
}
// } Driver Code Ends

// User function Template for Java
class Solution{
    // Function to check if the number is divisible by 5
    static int divisibleBy5(String N){
        // Get the length of the string
        int n = N.length();
        
        // Check if the last character is '0' or '5'
        if (N.charAt(n - 1) == '0' || N.charAt(n - 1) == '5') {
            return 1;  // Number is divisible by 5
        }
        
        // If last character is not '0' or '5', return 0
        return 0;
    }
}
