//{ Driver Code Starts
//Initial Template for Java


import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
	public static void main(String[] args) throws IOException
	{
        Scanner sc = new Scanner(System.in);
        int T = Integer.parseInt(sc.nextLine());
        while(T-->0)
        {
            String s = sc.next();
            String t = sc.next();
            Solution ob = new Solution();
            int res  = ob.EqualString(s, t);
            System.out.println(res);                        
        }
	}
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    public int EqualString(String s, String t)
    {
        // If lengths of strings don't match, they can't be equal
        if(s.length() != t.length())
        {
            return 0;
        }
        
        // Lists to hold characters at even and odd indices for both strings
        ArrayList<Character> even1 = new ArrayList<>();
        ArrayList<Character> even2 = new ArrayList<>();
        ArrayList<Character> odd1 = new ArrayList<>();
        ArrayList<Character> odd2 = new ArrayList<>();
        
        // Split characters of s and t into even and odd indexed lists
        for(int i = 0; i < s.length(); i++)
        {
            if(i % 2 == 0)
            {
                even1.add(s.charAt(i));  // Even index of s
                even2.add(t.charAt(i));  // Even index of t
            }
            else
            {
                odd1.add(s.charAt(i));   // Odd index of s
                odd2.add(t.charAt(i));   // Odd index of t
            }
        }
        
        // Sort both even and odd index character lists for both strings
        Collections.sort(even1);
        Collections.sort(even2);
        Collections.sort(odd1);
        Collections.sort(odd2);
        
        // If sorted even and odd indexed characters match for both strings
        if(even1.equals(even2) && odd1.equals(odd2))
        {
            return 1;  // Strings are equal based on sorted characters at even and odd indices
        }

        // If they don't match, return 0
        return 0;
    }
}
