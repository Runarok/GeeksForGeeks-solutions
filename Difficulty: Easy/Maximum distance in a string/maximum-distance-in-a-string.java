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
            int res  = ob.maximum_distance(s);
            System.out.println(res);                        
        
System.out.println("~");
}
	}
}
// } Driver Code Ends

class Solution
{
   // Function to find the maximum distance to form the alphabet sequence starting from 'a'
   public int maximum_distance(String s)
   {
       // String representing the English lowercase alphabet
       String alphabet = "abcdefghijklmnopqrstuvwxyz";
       
       // Array to store the last occurrence index of each character
       int lastOccurrence[] = new int[26];
       
       // Initialize maximum distance
       int maxDistance = -2;

       // Traverse the string and store the index of each character's last occurrence
       for(int i = 0; i < s.length(); i++) {
           lastOccurrence[(int)s.charAt(i) - 97] = i;
       }

       // Variable to track how much of the alphabet sequence is found in order
       int alphabetMatchCount = 0;

       // Traverse the string to find how many consecutive characters from the alphabet exist in order
       for(int i = 0; i < s.length(); i++) {
           if(alphabetMatchCount < 26) {  // There are 26 characters in the alphabet
               if(s.charAt(i) == alphabet.charAt(alphabetMatchCount)) {
                   alphabetMatchCount++;
               }
           }
       }

       // If no alphabet sequence was found, return -1
       if(alphabetMatchCount == 0) {
           return -1;
       }

       // Find the maximum last occurrence index within the matched alphabet sequence
       for(int i = 1; i < alphabetMatchCount; i++) {
           if(lastOccurrence[i] > maxDistance) {
               maxDistance = lastOccurrence[i];
           }
       }

       // Return the maximum position found (convert to 1-based index)
       return maxDistance + 1; 
   }
}
