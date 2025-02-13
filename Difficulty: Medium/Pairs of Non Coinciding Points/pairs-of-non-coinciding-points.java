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
            int N = Integer.parseInt(read.readLine());
            
            String S1[] = read.readLine().split(" ");
            String S2[] = read.readLine().split(" ");
            
            int[] X = new int[N];
            int[] Y = new int[N];
            
            for(int i=0; i<N; i++)
            {
                X[i] = Integer.parseInt(S1[i]);
                Y[i] = Integer.parseInt(S2[i]);
            }

            Solution ob = new Solution();
            System.out.println(ob.numOfPairs(X,Y,N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

class Solution
{
    /**
     * Function to count the number of valid pairs in two arrays.
     * A valid pair is one where the x and y coordinates from the two arrays 
     * have the same values at the same index.
     * @param x - Array representing x-coordinates.
     * @param y - Array representing y-coordinates.
     * @param n - Length of the arrays.
     * @return - The number of valid pairs.
     */
    static int numOfPairs(int[] x, int[] y, int n)
    {
        // Maps to track the frequency of x and y values
        Map<Integer, Integer> xFrequencyMap = new HashMap<>();
        Map<Integer, Integer> yFrequencyMap = new HashMap<>();
        
        // Map to track the frequency of pairs (x, y)
        Map<ArrayList<Integer>, Integer> pairFrequencyMap = new HashMap<>();
        
        int xPairsCount = 0, yPairsCount = 0, pairOverlapCount = 0;
        
        // Iterate through all points to count valid pairs
        for (int i = 0; i < n; i++)
        {
            // Count valid pairs for x-coordinate
            xPairsCount += xFrequencyMap.getOrDefault(x[i], 0);
            xFrequencyMap.put(x[i], xFrequencyMap.getOrDefault(x[i], 0) + 1);
            
            // Count valid pairs for y-coordinate
            yPairsCount += yFrequencyMap.getOrDefault(y[i], 0);
            yFrequencyMap.put(y[i], yFrequencyMap.getOrDefault(y[i], 0) + 1);
            
            // Count valid pairs for exact (x, y) pair
            ArrayList<Integer> currentPair = new ArrayList<>(Arrays.asList(x[i], y[i]));
            pairOverlapCount += pairFrequencyMap.getOrDefault(currentPair, 0);
            pairFrequencyMap.put(currentPair, pairFrequencyMap.getOrDefault(currentPair, 0) + 1);
        }
        
        // Return the total valid pairs by combining counts for x, y and subtracting the overlaps
        return xPairsCount + yPairsCount - (2 * pairOverlapCount);
    }
}
