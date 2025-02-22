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
            String s;
            s = sc.next();
            
            Solution ob = new Solution();
            
            if (ob.passed(s)==true)
                System.out.println("YES");
            else
                System.out.println("NO");
            
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution
{
    // Function to check if the two halves of a string have the same character frequencies
    boolean passed(String s)
    {
        // Find the middle index of the string
        int middle = s.length() / 2;
        
        // Split the string into two halves
        String a = s.substring(0, middle);
        String b = s.substring(middle + (s.length() % 2)); // Skip the middle character if the string length is odd
        
        // Create hash maps to store character frequencies for each half
        HashMap<Character, Integer> freq1 = new HashMap<>();
        HashMap<Character, Integer> freq2 = new HashMap<>();
       
        // Count character frequencies in the first half (a)
        for (char c : a.toCharArray()) {
            freq1.put(c, freq1.getOrDefault(c, 0) + 1);
        }

        // Count character frequencies in the second half (b)
        for (char c : b.toCharArray()) {
            freq2.put(c, freq2.getOrDefault(c, 0) + 1);
        }
        
        // Return true if the frequency maps for both halves are equal, false otherwise
        return freq1.equals(freq2);
    }
}
