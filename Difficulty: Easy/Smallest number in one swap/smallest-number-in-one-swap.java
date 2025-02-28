//{ Driver Code Starts
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
            Solution ob = new Solution();
            System.out.println(ob.smallestNumber(s));                        
        }
	}
}
// } Driver Code Ends

//User function Template for Java

class Solution
{
    public String smallestNumber(String num)
    {
        char[] digits = num.toCharArray();
        int n = digits.length;

        // Array to store the last occurrence index of each digit (0-9)
        int[] lastOccurrence = new int[10];
        Arrays.fill(lastOccurrence, -1);

        // Step 1: Record the last occurrence of each digit in the number
        for (int i = 0; i < n; i++) {
            lastOccurrence[digits[i] - '0'] = i;
        }

        // Step 2: Try to find the first place where we can swap
        for (int i = 0; i < n; i++) {
            int currentDigit = digits[i] - '0';

            // Check for a smaller digit (0 to currentDigit - 1) that appears after position i
            for (int smallerDigit = 0; smallerDigit < currentDigit; smallerDigit++) {
                if (lastOccurrence[smallerDigit] > i) {  // If such a smaller digit exists after position i
                    
                    // Important: Skip if this swap would create a leading zero
                    if (i == 0 && smallerDigit == 0) {
                        continue;
                    }

                    // Step 3: Swap current digit with the smaller digit
                    int swapIndex = lastOccurrence[smallerDigit];
                    char temp = digits[i];
                    digits[i] = digits[swapIndex];
                    digits[swapIndex] = temp;

                    // Return the modified string immediately after the swap
                    return new String(digits);
                }
            }
        }

        // No swap could improve the number, return the original number
        return num;
    }
}
