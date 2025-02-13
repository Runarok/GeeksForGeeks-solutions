//{ Driver Code Starts
// Initial Template for Java

import java.util.*;
import java.lang.*;
import java.io.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br =
            new BufferedReader(new InputStreamReader(System.in));
        int t =
            Integer.parseInt(br.readLine().trim()); // Inputting the testcases
        while (t-- > 0) {

            int N = Integer.parseInt(br.readLine().trim());

            int arr[][] = new int[(int)(N)][2];

            for (int j = 0; j < 2; j++) {
                String inputLine2[] = br.readLine().trim().split(" ");
                for (int i = 0; i < N; i++) {
                    arr[i][j] = Integer.parseInt(inputLine2[i]);
                }
            }
            Solution ob = new Solution();
            System.out.println(ob.mostBalloons(N, arr));
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    
    // Function to compute the greatest common divisor (GCD) using recursion
    public int getGCD(int a, int b) {
        if (b == 0) return a;
        return getGCD(b, a % b);
    }

    public int mostBalloons(int N, int arr[][]) {
        if (N <= 2) {
            return N; // If there are 2 or fewer points, all are on the same line
        }

        int maxBalloons = 2; // Minimum two points form a line

        for (int i = 0; i < N; i++) {
            int identical = 0; // Count of duplicate points
            Map<String, Integer> slopeMap = new HashMap<>(); // Store slope frequency

            for (int j = 0; j < N; j++) {
                if (i != j) {
                    // If the points are identical, increase duplicate count
                    if (arr[i][0] == arr[j][0] && arr[i][1] == arr[j][1]) {
                        identical++;
                    } else {
                        // Calculate slope in reduced form
                        int yDiff = arr[i][1] - arr[j][1];
                        int xDiff = arr[i][0] - arr[j][0];
                        int gcd = getGCD(xDiff, yDiff);

                        yDiff /= gcd;
                        xDiff /= gcd;

                        String slopeKey = xDiff + "-" + yDiff; // Represent slope as a string

                        // Update frequency of this slope
                        slopeMap.put(slopeKey, slopeMap.getOrDefault(slopeKey, 0) + 1);
                    }
                }
            }

            // Find the maximum number of points on the same line
            int mostPointsOnSameLine = 1;
            for (int count : slopeMap.values()) {
                mostPointsOnSameLine = Math.max(mostPointsOnSameLine, count);
            }

            // Update maxBalloons considering identical points
            maxBalloons = Math.max(maxBalloons, 1 + identical + mostPointsOnSameLine);
        }

        return maxBalloons; // Return the maximum number of balloons that can be burst in a single line
    }
}
