//{ Driver Code Starts
//Initial Template for Java


import java.util.*;
import java.lang.*;
import java.io.*;

class GFG {
    
	public static void main (String[] args)throws IOException{
		
		//taking input using BufferedReader class
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		//taking total count of testcases
		int t = Integer.parseInt(br.readLine());
		while(t-->0)
		{
		    //Reading the two Strings
		    String A = br.readLine();
		    String B = br.readLine();
		    
		    //Creating an object of class Rotate
		    Solution obj = new Solution();
		    
		    //calling areRotations method 
		    //of class Rotate and printing
		    //"1" if it returns true
		    //else "0"
		    if(obj.isPass(A,B))
		    {
		        System.out.println("1");
		    }
		    else
		    {
		        System.out.println("0");
		    }
		}
	}
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    public static boolean isPass(String target, String available) {
        // Create a list to hold the characters of the available string
        ArrayList<Character> availableChars = new ArrayList<>();
        
        // Add all characters from available string to the list
        for (int i = 0; i < available.length(); i++) {
            availableChars.add(available.charAt(i));
        }
        
        // Check if each character in the target string can be found in the available list
        for (int i = 0; i < target.length(); i++) {
            char currentChar = target.charAt(i);
            
            // If the character is not in the available list, return false immediately
            if (!availableChars.contains(currentChar)) {
                return false;
            } 
            // Otherwise, remove the first occurrence of the character from the list
            else {
                availableChars.remove((Character) currentChar);
            }
        }
        
        // If all characters from target can be matched, return true
        return true;
    }
}
