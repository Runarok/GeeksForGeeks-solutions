//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

// 
// } Driver Code Ends

// User function Template for Java

/* Class solution with countOddEven() as its member function
 * arr : input array
 */
class Solution {
    public static void countOddEven(Integer arr[]) {
        // Initialize counters for odd and even numbers
        int oddCount = 0;
        int evenCount = 0;

        // Iterate over the array and count odd and even numbers
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] % 2 != 0) {
                oddCount++; // Increment odd count if the number is odd
            } else {
                evenCount++; // Increment even count if the number is even
            }
        }

        // Print the counts of odd and even numbers
        System.out.println(oddCount + " " + evenCount);
    }
}


//{ Driver Code Starts.

class GFG {

    // Driver code
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int t;
        t = sc.nextInt();
        sc.nextLine(); // Consume the newline character

        while (t-- > 0) {
            String line = sc.nextLine();
            String[] tokens = line.split(" ");

            // Create an ArrayList to store the integers
            ArrayList<Integer> array = new ArrayList<>();

            // Parse the tokens into integers and add to the array
            for (String token : tokens) {
                array.add(Integer.parseInt(token));
            }

            // Convert ArrayList to array
            Integer[] arr = new Integer[array.size()];
            array.toArray(arr);

            Solution ob = new Solution();

            // Call countOddEven method and print result
            ob.countOddEven(arr);
            // System.out.println("~"); // Print separator for different test cases
        
System.out.println("~");
}
        sc.close();
    }
}

// } Driver Code Ends