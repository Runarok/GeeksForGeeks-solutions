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
            String S[] = read.readLine().split(" ");
            int[] Arr = new int[N];
            
            for(int i=0 ; i<N ; i++)
                Arr[i] = Integer.parseInt(S[i]);

            Solution ob = new Solution();
            int[] ptr = ob.numOfSubsets(Arr,N);
        
            System.out.println(ptr[0] + " " + ptr[1]);
        }
    }
}

// } Driver Code Ends

class Solution {
    static int[] numOfSubsets(int[] Arr , int N) {
        // Create a map to store the frequency of each element in the array
        Map<Integer, Integer> map = new HashMap<>();
        for (int a : Arr) {
            map.put(a, map.getOrDefault(a, 0) + 1);
        }

        // Variables to track the minimum and maximum values and their counts
        int minCount = 0;
        int maxCount = 0;
        int min = Integer.MAX_VALUE;
        int max = -1;

        // Iterate through the map to find the min and max elements and their counts
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            int key = entry.getKey();
            int value = entry.getValue();
            if (min > key) {
                min = key;
                minCount = value;
            }
            if (max < key) {
                max = key;
                maxCount = value;
            }
        }

        // Calculate the number of subsets for the min and max values
        int minRes = (int) Math.pow(2, minCount) - 1;
        minRes %= (Math.pow(10, 9) + 7);
        int maxRes = (int) Math.pow(2, maxCount) - 1;
        maxRes %= (Math.pow(10, 9) + 7);

        // Return the results as an array
        return new int[]{maxRes, minRes};
    }
}
