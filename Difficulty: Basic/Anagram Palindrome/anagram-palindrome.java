//{ Driver Code Starts
import java.util.*;
import java.lang.*;
import java.io.*;

class GFG
{
    public static void main (String[] args)
    {
		Scanner in = new Scanner(System.in);
		int t = in.nextInt();
		for(int i=0;i<t;i++){
		    String s = in.next();
		    if (new Sol().isPossible (s) == 1)
		        System.out.println ("Yes");
		    else
		        System.out.println ("No");
		
System.out.println("~");
}
	}
}

// Contributed By: Pranay Bansal


// } Driver Code Ends

class Sol {
    // Function to check if it is possible to rearrange the string to form a palindrome
    int isPossible(String S) {
        // Create a map to store the frequency of each character in the string
        Map<Character, Integer> freq = new HashMap<>();
        
        // Traverse the string and update the frequency of each character
        for (char ch : S.toCharArray()) {
            freq.put(ch, freq.getOrDefault(ch, 0) + 1);
        }
        
        // Variable to count the number of characters with odd frequencies
        int oddCount = 0;
        
        // Traverse the frequency map to check the count of odd frequencies
        for (int count : freq.values()) {
            if (count % 2 != 0) {
                oddCount++;
            }
            // If there are more than one character with an odd count, it cannot form a palindrome
            if (oddCount > 1) {
                return 0;  // Return 0 if more than one odd frequency is found
            }
        }
        
        // Return 1 if the string can be rearranged into a palindrome
        return 1;
    }
}
