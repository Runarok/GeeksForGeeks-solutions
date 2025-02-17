//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*; 
class GFG{
    public static void main(String args[]) throws IOException { 
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0){
            long amount = Long.parseLong(read.readLine().trim());
            Solution ob = new Solution();
            long ans = ob.findDiff(amount);
            System.out.println(ans);
        
System.out.println("~");
}
    } 
} 
// } Driver Code Ends

class Solution 
{ 
    long findDiff(long amount) 
    {   
        long rev = 0;
        long org = amount;
        int val = 1;

        // Loop through each digit of the amount
        while(amount != 0){
            long digit = amount % 10;
            
            // Replace 6 with 9
            if(digit == 6) digit = 9;
            
            // Update the reversed number with the transformed digit
            rev = rev + digit * val;
            val *= 10;
            
            // Move to the next digit
            amount /= 10;
        }
        
        // Return the difference between the modified and original amounts
        return (rev - org);
    }
}
