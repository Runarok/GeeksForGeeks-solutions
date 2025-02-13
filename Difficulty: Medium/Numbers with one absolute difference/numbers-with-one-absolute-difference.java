//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0)
        {
            long n = Long.parseLong(read.readLine());
            
            Solution ob = new Solution();
            
            ArrayList<Long> answer = ob.absDifOne(n);
            
            for(long value :  answer){
                System.out.print(value+" ");
            }
            
            if(answer.size() == 0)
            System.out.print(-1);
            
            System.out.println();

        }
    }
}
// } Driver Code Ends

class Solution {
    // Function to find all numbers less than or equal to N with adjacent digits having absolute difference of 1
    ArrayList<Long> absDifOne(long N) {
        // List to store the resulting numbers
        ArrayList<Long> result = new ArrayList<>();
        
        // Queue for BFS, starting with single-digit numbers from 1 to 9
        Queue<Long> queue = new LinkedList<>();
        for (long i = 1; i <= 9; i++) {
            queue.add(i);
        }
        
        // Perform BFS to generate all numbers with the desired property
        while (!queue.isEmpty()) {
            // Get the current number from the queue
            long currentNum = queue.poll();
            
            // If the current number is greater than or equal to 10 and less than or equal to N, add to result
            if (currentNum <= N && currentNum >= 10) {
                result.add(currentNum);
            }
            
            // Stop further processing if the current number exceeds N
            if (currentNum > N) {
                continue;
            }
            
            // Get the last digit of the current number
            int lastDigit = (int) (currentNum % 10);
            
            // Generate the next numbers by appending a digit to the current number
            // Append lastDigit-1 if it's not 0
            if (lastDigit > 0) {
                long nextNumber = currentNum * 10 + (lastDigit - 1);
                if (nextNumber <= N) {
                    queue.add(nextNumber);
                }
            }
            
            // Append lastDigit+1 if it's not 9
            if (lastDigit < 9) {
                long nextNumber = currentNum * 10 + (lastDigit + 1);
                if (nextNumber <= N) {
                    queue.add(nextNumber);
                }
            }
        }
        
        // Return the list of generated numbers
        return result;
    }
}

