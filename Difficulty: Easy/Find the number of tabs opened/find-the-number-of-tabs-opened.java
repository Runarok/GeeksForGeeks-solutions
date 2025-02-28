//{ Driver Code Starts
// Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        sc.nextLine(); // Consume the newline character after the integer input.

        while (t-- > 0) {
            String s = sc.nextLine();
            List<String> arr = Arrays.asList(s.split(" "));
            Solution ob = new Solution();
            int ans = ob.countTabs(arr);
            System.out.println(ans);
            System.out.println("~");
        }
        sc.close();
    }
}

// } Driver Code Ends

class Solution {
    public int countTabs(List<String> arr) {
        // Create a hashmap to track the state of each ID (whether it's opened or closed)
        HashMap<String, Boolean> map = new HashMap<>();
        int count = 0;  // Variable to store the count of currently opened tabs
        
        for(String s: arr) {
            if(s.equals("END")) {
                // Reset the map and count when "END" appears
                map = new HashMap<>();
                count = 0;
            } else if(map.containsKey(s)){
                // If the ID is already in the map, toggle its state
                map.put(s, !map.get(s));
                
                // Adjust the count based on the new state of the ID
                if(map.get(s) == true) {
                    count++;
                } else {
                    count--;
                }
            } else {
                // If the ID is not in the map, add it and set it to "opened"
                map.put(s, true);
                count++;
            }
        }
        
        return count;  // Return the final count of opened tabs
    }
}
