//{ Driver Code Starts
// Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;
import java.util.ListIterator;

class GFG {
    public static void main(String[] args) {

        // Taking input using Scanner Class
        Scanner sc = new Scanner(System.in);

        // Taking total  number of testcases
        int t = sc.nextInt();
        sc.nextLine();
        while (t-- > 0) {
            // Taking total number of elements
            String temp[] = sc.nextLine().trim().split(" ");
            int n = temp.length;

            // Creating a new ArrayList
            ArrayList<Integer> arr = new ArrayList<>();

            // adding the elements in the ArrayList
            for (int i = 0; i < n; i++) {
                arr.add(Integer.parseInt(temp[i]));
            }

            // Calling insertion method
            // and storing the result in
            // a PriorityQueue
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

public static PriorityQueue<Integer> insertion(ArrayList<Integer> numbers) {
    // Create a max-heap (priority queue with reverse order)
    PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());

    // Insert each element from the list into the max-heap
    for (int number : numbers) {
        maxHeap.add(number);
    }

    // Return the constructed max-heap
    return maxHeap;
}


//{ Driver Code Starts.
}

// } Driver Code Ends