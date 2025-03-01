//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String S[] = read.readLine().split(" ");
            
            int x = Integer.parseInt(S[0]);
            int y = Integer.parseInt(S[1]);
            int n = Integer.parseInt(S[2]);

            Solution ob = new Solution();
            System.out.println(ob.getCount(x,y,n));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

class Solution {
    public static int getCount(int x, int y, int n) {
        // Initialize a queue for BFS and a set to track visited numbers
        Queue<Integer> queue = new LinkedList<>();
        HashSet<Integer> seen = new HashSet<>();
        
        // Start with 0 in the queue and mark it as seen
        queue.add(0);
        seen.add(0);
        
        int count = 0;
        
        // Perform BFS
        while (!queue.isEmpty()) {
            // Dequeue the next number
            int num = queue.poll();
            
            // Count the valid numbers that are greater than 0 and less than or equal to n
            if (num > 0 && num <= n) {
                count++;
            }
            
            // Try adding x and y to the current number
            for (int add : new int[]{x, y}) {
                int newNum = num + add;
                
                // If the new number is within the valid range and hasn't been seen yet, add it to the queue
                if (newNum <= n && !seen.contains(newNum)) {
                    seen.add(newNum);
                    queue.add(newNum);
                }
            }
        }
        
        // Return the count of valid numbers
        return count;
    }
}
