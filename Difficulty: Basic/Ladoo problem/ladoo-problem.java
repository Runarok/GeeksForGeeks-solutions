//{ Driver Code Starts

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            int N = Integer.parseInt(read.readLine());
            
            String S[] = read.readLine().split(" ");
            
            int[] A = new int[N];
            
            for(int i=0 ; i<N ; i++)
                A[i] = Integer.parseInt(S[i]);

            Solution ob = new Solution();
            System.out.println(ob.divideLadoo(N,A));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

class Solution {
    // Function to count the distinct number of ladoos (unique elements in the array)
    static int divideLadoo(int N, int[] A) {
        // Create a HashSet to store unique elements from the array
        Set<Integer> set = new HashSet<>();
        
        // Loop through the array and add each element to the set
        for(int i : A) {
            set.add(i);
        }
        
        // Return the size of the set, which represents the count of unique ladoos
        return set.size();
    }
};
