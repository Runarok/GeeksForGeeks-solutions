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
            long ans = ob.countStrings(S); 
            System.out.println(ans);
        
System.out.println("~");
}
    } 
} 
// } Driver Code Ends

// User function Template for Java
class Solution {   
    long countStrings(String S) { 
        HashMap<Character, Integer> frequencyMap = new HashMap<>();
        long duplicateCount = 0;

        // Step 1: Calculate frequency of each character in the string
        for (int i = 0; i < S.length(); i++) {
            char currentChar = S.charAt(i);
            frequencyMap.put(currentChar, frequencyMap.getOrDefault(currentChar, 0) + 1);
        }

        long stringLength = (long) S.length();
        
        // Step 2: Calculate total possible unique swaps
        long totalPossibleSwaps = (stringLength * (stringLength - 1)) / 2;

        // Step 3: If all characters are unique, return total possible swaps
        if (frequencyMap.size() == S.length()) {
            return totalPossibleSwaps;
        } else {
            // Step 4: Calculate duplicate swaps that result in the same string
            for (Character key : frequencyMap.keySet()) {
                long freq = frequencyMap.get(key);
                duplicateCount += (freq * (freq - 1)) / 2; // Count repeated swaps
            }  
        }

        // Step 5: Return total distinct strings including the original string
        return (totalPossibleSwaps - duplicateCount + 1);
    }
}
