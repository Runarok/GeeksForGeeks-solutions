//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {

    
// } Driver Code Ends

// User function Template for Java

// Function to calculate and return the average of all the non-negative integers
// from the ArrayList provided in the parameter
public static double posAverage(ArrayList<Integer> list) {
    int sum = 0;  // Variable to store the sum of non-negative integers
    int count = 0;  // Variable to store the count of non-negative integers
    
    // Loop through the list to process each element
    for (int num : list) {
        if (num >= 0) {  // Check if the number is non-negative
            sum += num;  // Add the number to the sum
            count++;  // Increment the count
        }
    }
    
    // Calculate the average by dividing the sum by the count of non-negative numbers
    double avg = (double) sum / (double) count;
    
    // Return the calculated average
    return avg;
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

            double average = posAverage(list);
            System.out.println(average);

            System.out.println("~");
        }
    }
}
// } Driver Code Ends