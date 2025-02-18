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
        int T = Integer.parseInt(br.readLine().trim());
        while(T-->0)
        {
            String[] input = new String[2]; 
            input = br.readLine().split(" "); 
            int H = Integer.parseInt(input[0]); 
            int M = Integer.parseInt(input[1]); 
            Solution ob = new Solution();
            System.out.println(ob.timeToWord(H,M));
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    public String timeToWord(int h, int m) {
        // Array to map numbers to their corresponding word representation
        String[] numWords = {
            "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
            "eleven", "twelve", "thirteen", "fourteen", "quarter", "sixteen", "seventeen", "eighteen", "nineteen",
            "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six",
            "twenty seven", "twenty eight", "twenty nine", "half"
        };

        // If minutes are zero, return the hour in the format "X o'clock"
        if (m == 0) {
            return numWords[h] + " o'clock";
        } 
        // If minutes are 15, return in the format "quarter past X"
        else if (m == 15) {
            return "quarter past " + numWords[h];
        } 
        // If minutes are 30, return in the format "half past X"
        else if (m == 30) {
            return "half past " + numWords[h];
        } 
        // For minutes less than 30 (excluding 15 and 30), return the format "X minutes past Y"
        else if (m < 30) {
            String minWords = (m == 1) ? "minute past" : "minutes past";
            return numWords[m] + " " + minWords + " " + numWords[h];
        } 
        // For minutes greater than 30, return the format "X minutes to Y"
        else if (m == 45) {
            return "quarter to " + numWords[h + 1];
        } else {
            // Calculate the minutes to the next hour
            int minutesTo = 60 - m;
            String minWord = (minutesTo == 1) ? "minute" : "minutes";
            return numWords[minutesTo] + " " + minWord + " to " + numWords[(h % 12) + 1];
        }
    }
}
