//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while(t-- > 0)
        {
            int N = sc.nextInt();

            Solution ob = new Solution();
            String ans = ob.getBinaryRep(N);
            System.out.println(ans);
        }
    }
}
// } Driver Code Ends

// User function Template for Java
class Solution{
    /**
     * @param N - The number to be converted to binary
     * @return String - The binary representation of N, padded to 30 bits
     */
    static String getBinaryRep(int N){
        // StringBuilder to accumulate binary digits
        StringBuilder sb  = new StringBuilder();
        
        // Convert number to binary
        while(N > 0){
            sb.append((N % 2)); // Append the remainder (either 0 or 1)
            N /= 2; // Divide N by 2 for the next iteration
        }
        
        // Reverse the StringBuilder to get the correct binary order
        sb.reverse();
        
        // Ensure the binary string has at least 30 bits by prepending zeros
        while(sb.length() < 30){
            sb.insert(0, "0");
        }
        
        // Return the final binary string
        return sb.toString();
    }
}
