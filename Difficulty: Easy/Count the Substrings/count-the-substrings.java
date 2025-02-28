//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*; 
class GFG{
    public static void main(String args[]) throws IOException { 
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        
        while(t-- > 0){
            String S = read.readLine().trim();
            Solution ob = new Solution();
            int ans = ob.countSubstring(S);
            System.out.println(ans);
        
System.out.println("~");
}
    } 
} 
// } Driver Code Ends

//User function Template for Java
class Solution 
{ 
    // Function to count the number of valid substrings where the count of uppercase
    // letters equals the count of lowercase letters.
    int countSubstring(String S) 
    { 
        // Initialize count of valid substrings.
        int validSubstringCount = 0;

        // Difference counter to track imbalance between uppercase and lowercase letters.
        int upperLowerDiff = 0;

        // Map to store the frequency of each `upperLowerDiff` encountered.
        HashMap<Integer, Integer> prefixCountMap = new HashMap<>();
        
        // Initialize with 0 to handle the case where the entire prefix itself is valid.
        prefixCountMap.put(0, 1); 

        // Iterate through each character in the string.
        for (char ch : S.toCharArray()) {
            if (Character.isUpperCase(ch)) {
                upperLowerDiff++; // Increment for uppercase character.
            } else {
                upperLowerDiff--; // Decrement for lowercase character.
            }

            // Check if this `upperLowerDiff` has been seen before.
            // If yes, add its frequency to the validSubstringCount.
            validSubstringCount += prefixCountMap.getOrDefault(upperLowerDiff, 0);

            // Update the frequency count of this `upperLowerDiff`.
            prefixCountMap.put(upperLowerDiff, prefixCountMap.getOrDefault(upperLowerDiff, 0) + 1);
        }

        // Return the total count of valid substrings.
        return validSubstringCount;
    }
} 
