//{ Driver Code Starts
// Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;
import java.util.ListIterator;

class GFG {
    public static void main(String[] args) {

        // Taking input using class Scanner
        Scanner sc = new Scanner(System.in);

        // Taking total number of testcases
        int t = sc.nextInt();
        sc.nextLine();
        while (t-- > 0) {
            // taking total number of elements
            String temp[] = sc.nextLine().trim().split(" ");
            int n = temp.length;

            // Creating a new ArrayList
            ArrayList<Integer> arr = new ArrayList<>();

            // Adding elements to the ArrayList
            for (int i = 0; i < n; i++) {
                arr.add(Integer.parseInt(temp[i]));
            }

            // Calling the method insertion
            // and storing the result in a
            // PriorityQueue
            PriorityQueue<Integer> pq = insertion(arr);

            // Printing all the elements
            // of the PriorityQueue
            while (pq.size() > 0) {
                System.out.print(pq.poll() + " ");
            }

            System.out.println();
        }
    }

    
// } Driver Code Ends
// User function Template for Java

public static PriorityQueue<Integer> insertion(ArrayList<Integer> numbers) {
    // Create a min-heap (priority queue) and initialize it with elements from the list
    PriorityQueue<Integer> minHeap = new PriorityQueue<>(numbers);

    // Return the constructed min-heap
    return minHeap;
}

//{ Driver Code Starts.
}

// } Driver Code Ends