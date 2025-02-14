//{ Driver Code Starts
// initial template for Java

import java.io.*;
import java.util.*;

class GFG {
    // Position this line where user code will be pasted.
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            int N = Integer.parseInt(read.readLine());
            String S = read.readLine();
            Solution ob = new Solution();
            System.out.println(ob.RedOrGreen(N, S));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends


class Solution {
    static int RedOrGreen(int N, String S) {
        // Count the number of 'R' and 'G' characters in the string
        int countR = 0, countG = 0;
        
        // Loop through the string to count occurrences of 'R' and 'G'
        for (int i = 0; i < N; i++) {
            if (S.charAt(i) == 'R') {
                countR++;
            } else {
                countG++;
            }
        }
        
        // Minimum changes required will be the smaller of the two counts
        return Math.min(countR, countG);
    }
}
