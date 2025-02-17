//{ Driver Code Starts


import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
    public static void main(String[] args) throws IOException
    {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        sc.nextLine();
        while(T-->0)
        {
            String S = sc.nextLine();
            String S1 = sc.nextLine();
            String [] s = S.split(" ");
            String [] t = S1.split(" ");
            Solution ob = new Solution();
            String res  = ob.is_common(s, t);
            System.out.println(res);
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution
{
    // Function to check if any common element exists between two arrays
    public String is_common(String[] s, String[] t)
    {
        // Create a HashSet to store elements of the first array
        HashSet<String> set = new HashSet<>();
        
        // Add all elements from the first array (s) into the set
        for (int i = 0; i < s.length; i++) {
            set.add(s[i]);
        }

        // Check if any element from the second array (t) exists in the set
        for (int i = 0; i < t.length; i++) {
            if (set.contains(t[i])) {
                // If a common element is found, return "CHANGE"
                return "CHANGE";
            }
        }

        // If no common element is found, return "BEHAPPY"
        return "BEHAPPY";
    }
}
