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
            String[] inp=read.readLine().split(" ");
            int L=Integer.parseInt(inp[0]);
            int R=Integer.parseInt(inp[1]);
            
            Solution ob = new Solution();
            System.out.println(ob.numbersInRange(L,R));
        }
    }
}

// } Driver Code Ends

//User function Template for Java
class Solution{
    static int numbersInRange(int L, int R){
        if (R < L) return 0; // Invalid range check

        int count = 0; // Variable to count valid numbers

        // Calculate the next multiple of 10 after L
        int nextMultipleOfTen = L + 10 - (L % 10);

        // Handle numbers from L to the next multiple of 10 if L is less than 10
        if (L < 10) {
            count += 10 - L;
        }

        // Calculate the previous multiple of 10 before R
        int previousMultipleOfTen = R - (R % 10);

        // Count numbers from nextMultipleOfTen to previousMultipleOfTen (each decade contributes 1)
        count += (previousMultipleOfTen - nextMultipleOfTen) / 10;

        // Get the first digit of R
        int temp = R;
        int firstDigitOfR = 0;
        while (temp > 0) {
            firstDigitOfR = temp % 10;
            temp /= 10;
        }

        // If the first digit is <= the last digit of R, it qualifies
        if (firstDigitOfR <= (R % 10)) {
            count++;
        }

        // Handle the case where L > 10
        if (L > 10) {
            temp = L;
            int firstDigitOfL = 0;
            while (temp > 0) {
                firstDigitOfL = temp % 10;
                temp /= 10;
            }
            // If the first digit is >= the last digit of L, it qualifies
            if (firstDigitOfL >= (L % 10)) {
                count++;
            }
        }
        return count; // Final count of numbers satisfying the condition
    }
}
