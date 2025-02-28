//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*;
class GFG{
    public static void main(String args[]) throws IOException { 
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0){
            String s = read.readLine().trim();
            Solution ob = new Solution();
            int ans = ob.fun(s);
            System.out.println(ans);
        
System.out.println("~");
}
    } 
} 
// } Driver Code Ends

//User function Template for Java

class Solution { 
    int fun(String inputString) {
        // Set to store unique consecutive 2-character substrings.
        HashSet<String> uniquePairsSet = new HashSet<>();

        // Loop through the string to extract all 2-character substrings.
        for (int index = 0; index < inputString.length() - 1; index++) {
            uniquePairsSet.add(inputString.substring(index, index + 2));
        }

        // Return the number of unique 2-character substrings.
        return uniquePairsSet.size();
    }
}
