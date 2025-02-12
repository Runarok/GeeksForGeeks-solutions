//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {

            String input[] = read.readLine().split(" ");
            String a = input[0];

            Solution ob = new Solution();
            if (ob.sameFreq(a)) {
                System.out.println("true");
            } else {
                System.out.println("false");
            }
        }
    }
}
// } Driver Code Ends

class Solution {
    boolean sameFreq(String s) {
        // Create a map to store frequency of each character
        Map<Character, Integer> cmap = new HashMap<>();
        // Create a map to store the frequency of frequencies
        Map<Integer, Integer> fmap = new HashMap<>();
        
        // Step 1: Calculate frequency of each character
        for (char c : s.toCharArray()) {
            cmap.put(c, cmap.getOrDefault(c, 0) + 1);
        }
        
        // Step 2: Calculate how many characters have the same frequency
        for (int x : cmap.values()) {
            fmap.put(x, fmap.getOrDefault(x, 0) + 1);
        }
        
        // Step 3: If more than 2 different frequencies exist, return false
        if (fmap.size() > 2) {
            return false;
        }
        
        // Step 4: If only one frequency exists, return true
        if (fmap.size() == 1) {
            return true;
        }
        
        int f1 = 0, f2 = 0;
        int count = 0, count2 = 0;
        
        // Step 5: If two different frequencies exist, identify them
        if (fmap.size() == 2) {
            for (int num : fmap.keySet()) {
                if (f1 == 0) {
                    f1 = num;
                    count = fmap.get(num);
                } else {
                    f2 = num;
                    count2 = fmap.get(num);
                }
            }
        }
        
        // Step 6: Check the conditions for valid same frequency scenarios
        if ((f1 == 1 && count == 1) || (f2 == 1 && count2 == 1)) {
            return true;
        }
        
        // Step 7: Check if the difference between the two frequencies is 1 and one of them occurs once
        if ((f1 + 1 == f2 && count2 == 1) || (f2 + 1 == f1 && count == 1)) {
            return true;
        }
        
        // Return false if none of the conditions are satisfied
        return false;
    }
}
