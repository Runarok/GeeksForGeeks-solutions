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
            
            String[][] vec = new String[N][4];
            
            for(int i=0; i<N; i++)
            {
                String S[] = read.readLine().split(" ");
                for(int j=0; j<4; j++)
                    vec[i][j] = (String)S[j];
            }
            
            Solution ob = new Solution();
            System.out.println(ob.studentRecord(vec,N));
        }
    }
}
// } Driver Code Ends


class Solution {
    static String studentRecord(String[][] S, int N) {
        // Initialize the maximum average and the result string
        int maxAvg = 0;
        StringBuilder result = new StringBuilder();

        // Iterate through the student records
        for (String[] student : S) {
            int sum = 0;

            // Calculate the sum of the three scores for the current student
            for (int i = 1; i <= 3; i++) {
                sum += Integer.parseInt(student[i]);
            }

            // Calculate the average score for the student
            int avg = sum / 3;

            // If the current student's average is greater than maxAvg, update maxAvg and reset result
            if (avg > maxAvg) {
                maxAvg = avg;
                result.setLength(0);  // Reset the StringBuilder
                result.append(student[0]);  // Append the student's name
            } 
            // If the average is equal to maxAvg, add the student's name to the result
            else if (avg == maxAvg) {
                result.append(" ").append(student[0]);
            }
        }

        // Append the maximum average score to the result and return the string
        result.append(" ").append(maxAvg);
        return result.toString();
    }
}
