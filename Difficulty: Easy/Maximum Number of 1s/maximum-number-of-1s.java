//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*;
class GfG
{
    public static void main(String args[])
        {
            Scanner sc = new Scanner(System.in);
            int t = sc.nextInt();
            while(t-->0)
                {
                    String s = sc.next();
                    Solution ob = new Solution();
                    System.out.println(ob.maxOnes(s));
                }
        }
}    
// } Driver Code Ends

class Solution
{
    // Function to calculate the maximum number of 1's after flipping exactly one contiguous subarray
    public int maxOnes(String s)
    {
        int originalgain = 0;  // To count the original number of 1's in the string
        int maxgain = 0;       // To track the maximum gain possible by flipping a subarray
        int curgain = 0;       // To track the current gain during iteration
        
        // Loop through each character of the string
        for(char ch : s.toCharArray()){
            
            // If the character is '1', it will decrease the gain because flipping it to '0'
            if(ch == '1'){
                originalgain++;   // Count the original 1's
                curgain -= 1;     // Flip 1 to 0, so decrease the gain
            }
            else {
                curgain += 1;     // If the character is '0', flipping it to '1' will increase the gain
            }
            
            // Update maxgain with the maximum of current gain and previous maxgain
            maxgain = Math.max(curgain, maxgain);
            
            // If the current gain becomes negative, reset it to zero (as we want to maximize the gain)
            if(curgain < 0){
                curgain = 0;
            }
        }
        
        // If the entire string consists of 1's, flipping any part would reduce the number of 1's, 
        // so return the number of 1's minus 1
        return (originalgain == s.length()) ? s.length() - 1 : originalgain + maxgain;
    }
}
