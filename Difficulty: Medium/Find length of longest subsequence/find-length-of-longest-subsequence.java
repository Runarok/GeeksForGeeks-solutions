//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*; 
class GFG{
    public static void main(String args[]) throws IOException { 
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        
        while(t-- > 0){
            String input_line[] = read.readLine().trim().split("\\s+");
            int N = Integer.parseInt(input_line[0]);
            int M = Integer.parseInt(input_line[1]);
            input_line = read.readLine().trim().split("\\s+");
            String X = input_line[0];
            String Y = input_line[1];
            Solution obj = new Solution();
            int ans = obj.maxSubsequenceSubstring(X, Y, N, M); 
            System.out.println(ans);
        }
    } 
} 
// } Driver Code Ends

class Solution 
{
    // Function to find the length of the maximum subsequence substring
    int maxSubsequenceSubstring(String X, String Y, int N, int M) 
    {
        // Initialize max to track the length of the longest subsequence
        int max = 0;
        
        // Iterate through all characters of Y
        for (int i = 0; i < Y.length(); i++) {
            int k = i;
            int count = 0;

            // Try to find a matching subsequence in X for the substring of Y
            for (int j = 0; j < X.length() && k < Y.length(); j++) {
                // If characters match, move to the next character in Y
                if (X.charAt(j) == Y.charAt(k)) {
                    k++;
                    count++;
                }
            }

            // Track the maximum count of matched subsequences
            max = Math.max(max, count);
        }

        // Return the maximum subsequence length
        return max;
    }

    // Helper function to check if a string is a subsequence of another string
    private static boolean isSubsequence(String X, String substring) {
        int i = 0, j = 0;
        
        // Traverse both strings to find if substring is a subsequence of X
        while (i < X.length() && j < substring.length()) {
            if (X.charAt(i) == substring.charAt(j)) {
                j++; // Move to the next character in the substring
            }
            i++; // Always move to the next character in X
        }

        // Return true if the entire substring was found as a subsequence
        return j == substring.length();
    }    

    // Helper function to generate all subsequences of a string
    private Set<String> generateSubsequences(String str) {
        // Calculate the total number of subsequences (2^length)
        double n = Math.pow(2, str.length());
        Set<String> subsequences = new HashSet<>();

        // Generate each subsequence using bit manipulation
        for (int i = 0; i < n; i++) {
            StringBuilder sb = new StringBuilder();
            for (int j = 0; j < str.length(); j++) {
                // If the j-th bit is set, include the j-th character in the subsequence
                if ((i & (1 << j)) != 0)
                    sb.append(str.charAt(j));
            }
            // Add the subsequence to the set
            subsequences.add(sb.toString());
        }
        return subsequences;
    }
}  
