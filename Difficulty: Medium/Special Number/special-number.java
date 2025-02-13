//{ Driver Code Starts


import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
    public static void main(String[] args) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while(T-->0)
        {
            String[] s = br.readLine().trim().split(" ");
            int n = Integer.parseInt(s[0]);
            int b = Integer.parseInt(s[1]);
            Solution obj = new Solution();
            int ans = obj.countOfSpeacialNo(n, b);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends

class Solution
{
    // Function to count special numbers
    public int countOfSpeacialNo(int n, int b)
    {
        // Starting the recursive call to find the count of special numbers
        return specialNumber(n-1, b, 0, 0, n);
    }

    // Recursive function to calculate the number of special numbers
    public int specialNumber(int index, int base, int leftSum, int rightSum, int n)
    {
        // Base case: when index is -1, check if left and right sums are equal
        if(index == -1)
        {
            if(leftSum == rightSum) // If both sums are equal, it is a valid special number
                return 1;
            return 0; // Otherwise, it is not a special number
        }

        int res = 0; // To store the result of this recursive step

        // Loop through all possible values for the current position in the number
        for(int i = 0; i < base; i++)
        {
            // If n is odd and the index is in the middle of the number, add to both sums equally
            if(n % 2 == 1 && index == (int)(n / 2))
                res += specialNumber(index - 1, base, leftSum + i, rightSum + i, n);
            // If the index is greater than or equal to the half of the number, continue adding to the left sum
            else if(index > (n / 2) - 1)
                res += specialNumber(index - 1, base, leftSum + i, rightSum, n);
            // Otherwise, continue adding to the right sum
            else
                res += specialNumber(index - 1, base, leftSum, rightSum + i, n);
        }

        return res; // Return the final count of special numbers
    }
}
