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
        int t = Integer.parseInt(br.readLine().trim());
        while(t-->0)
        {
            String s = br.readLine().trim();
            Solution obj = new Solution();
            int ans = obj.divisible_by_four(s);
            System.out.println(ans);            
        }
	}
}
// } Driver Code Ends

//User function Template for Java

class Solution{
    public int divisible_by_four(String num)
    {
        int length = num.length();
        
        // If the number has only one digit, directly check divisibility by 4
        if (length == 1) {
            return (Integer.parseInt(num) % 4 == 0) ? 1 : 0;
        }

        // Check all possible two-digit combinations formed by selecting two different digits
        for (int firstIndex = 0; firstIndex < length; firstIndex++) {
            for (int secondIndex = 0; secondIndex < length; secondIndex++) {
                if (firstIndex != secondIndex) { // Ensure we pick two different digits
                    int twoDigitNumber = (num.charAt(firstIndex) - '0') * 10 + (num.charAt(secondIndex) - '0');
                    
                    // Check if this two-digit number is divisible by 4
                    if (twoDigitNumber % 4 == 0) {
                        return 1;
                    }
                }
            }
        }
        
        // No valid two-digit divisible number found
        return 0;
    }
}
