//{ Driver Code Starts
// Initial Template for Java
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

            int i = 0;
            int N = Integer.parseInt(br.readLine().trim());

            int lines[][] = new int[(int)(N)][2];

            for (int j = 0; j < 2; j++) {
                String inputLine2[] = br.readLine().trim().split(" ");
                for (i = 0; i < N; i++) {
                    lines[i][j] = Integer.parseInt(inputLine2[i]);
                }
            }
            Solution ob = new Solution();
            System.out.println(ob.maxIntersections(lines, N));
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    public int maxIntersections(int[][] lines, int N) {
        // List to store points where lines start and end
        ArrayList<int[]> points = new ArrayList<>();

        // For each line, add its start and end points to the list
        for (int[] line : lines) {
            points.add(new int[] {line[0], 1});  // Start point (+1 indicating line starts)
            points.add(new int[] {line[1], -1}); // End point (-1 indicating line ends)
        }

        // Sort the points first by the coordinate, and if two points have the same coordinate,
        // sort by the type of point (-1 should come after +1 for the same coordinate).
        Collections.sort(points, (a, b) -> a[0] == b[0] ? b[1] - a[1] : a[0] - b[0]);

        // Variable to count the number of active lines at any point
        int count = 0;
        // Variable to track the maximum number of intersections encountered
        int maxCount = 0;

        // Loop through the sorted points to calculate active line count at each point
        for (int[] point : points) {
            count += point[1];  // Add or subtract 1 based on whether the point is a start or end
            maxCount = Math.max(maxCount, count); // Update the maximum count of active lines (intersections)
        }

        // Return the maximum number of intersections
        return maxCount;
    }
}
