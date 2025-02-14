//{ Driver Code Starts
// Initial Template for Java
/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;
import java.util.ListIterator;

class GFG {
    public static void main(String[] args) {

        // taking input using Scanner class
        Scanner sc = new Scanner(System.in);

        // taking number of testcases
        int t = sc.nextInt();
        sc.nextLine();
        while (t-- > 0) {
            // taking number of elements
            String temp[] = sc.nextLine().trim().split(" ");

            int n = temp.length;

            // Declaring and Initializing an ArrayList
            ArrayList<Integer> arr = new ArrayList<>();

            // adding elements to the ArrayList
            for (int i = 0; i < n; i++) {
                arr.add(Integer.parseInt(temp[i]));
            }

            // calling maxElement() and minimumElement() method
            // and passing the ArrayList and printing the result
            System.out.println(maximumElement(arr) + " " + minimumElement(arr));
        }
    }

    
// } Driver Code Ends
// User function Template for Java
// Function to find the maximum element in the ArrayList
public static int maximumElement(ArrayList<Integer> arr) {
    int maxElement = Integer.MIN_VALUE;
    
    // Iterate through the list to find the maximum value
    for (int num : arr) {
        if (num > maxElement) {
            maxElement = num;
        }
    }
    return maxElement;
}

// Function to find the minimum element in the ArrayList
public static int minimumElement(ArrayList<Integer> arr) {
    int minElement = Integer.MAX_VALUE;
    
    // Iterate through the list to find the minimum value
    for (int num : arr) {
        if (num < minElement) {
            minElement = num;
        }
    }
    return minElement;
}


//{ Driver Code Starts.
}
// } Driver Code Ends