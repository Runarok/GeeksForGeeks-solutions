//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*; 
class GFG{
    public static void main(String args[]) throws IOException { 
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine().trim());
        while(t-- > 0){
            String N = read.readLine().trim();
            Solution ob = new Solution();
            System.out.println(ob.solve(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java
class Solution 
{ 
    String solve(String N) 
    { 
        // Map to store frequency of each digit
        HashMap<Character, Integer> frequencyMap = new HashMap<>();
        
        // Count frequency of each digit in the string
        for (char ch : N.toCharArray()) {
            frequencyMap.put(ch, frequencyMap.getOrDefault(ch, 0) + 1);
        }
        
        // Variable to keep track of the digit with maximum frequency
        StringBuilder result = new StringBuilder(""); 
        int maxFrequency = Integer.MIN_VALUE;
        
        // Traverse through the map to find the highest occurring digit
        for (Map.Entry<Character, Integer> entry : frequencyMap.entrySet()) {
            if (maxFrequency <= entry.getValue()) {
                // Clear previous result if current digit has higher frequency
                result.delete(0, result.length());
                maxFrequency = entry.getValue();
                result.append(entry.getKey());
            }
        }
        
        // Return the most frequent digit (in case of tie, it will be the larger digit due to map order)
        return result.toString();
    }
}
