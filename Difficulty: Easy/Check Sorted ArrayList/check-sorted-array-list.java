//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {

    
// } Driver Code Ends

// User function Template for Java

public static boolean isSorted(ArrayList<Integer> list) {
    
    int r = list.get(0);  // Initial reference element
    int t = list.size();  // Size of the list
    boolean b = true;  // Flag to indicate sorting order
    
    // First pass to check if the list is increasing or decreasing
    for(int i = 0; i < t; i++) {
        if(r == list.get(i)) {
            continue;  // Skip if the current element is the same as the previous
        }
        else if(r < list.get(i)) {
            b = true;  // Set to increasing order
        }
        else {
            b = false;  // Set to decreasing order
        }
        
        r = list.get(i);  // Update reference element
    }
    
    r = list.get(0);  // Reset reference element for further checks
    
    // If list is increasing
    if(b) {
        for(int i = 0; i < t; i++) {
            if(r > list.get(i)) {
                return false;  // Return false if elements are not in increasing order
            }
        
            r = list.get(i);  // Update reference element
        }
    }
    
    // If list is decreasing
    if(!b) {
        for(int i = 0; i < t; i++) {
            if(r < list.get(i)) {
                return false;  // Return false if elements are not in decreasing order
            }
        
            r = list.get(i);  // Update reference element
        }
    }
    
    return true;  // Return true if the list is sorted
}



//{ Driver Code Starts.

    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());

        while (t-- > 0) {
            String input[] = read.readLine().trim().split("\\s+");
            ArrayList<Integer> list = new ArrayList<Integer>();

            for (int i = 0; i < input.length; i++) {
                list.add(Integer.parseInt(input[i]));
            }

            if (isSorted(list))
                System.out.println("Sorted");
            else
                System.out.println("Not Sorted");

            System.out.println("~");
        }
    }
}
// } Driver Code Ends