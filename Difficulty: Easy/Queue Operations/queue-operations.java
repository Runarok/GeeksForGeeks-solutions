//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;


// } Driver Code Ends

// User function Template for Java
// Helper class Geeks to implement insert() and findFrequency()

class Geeks {
    // Function to insert element into the queue
    static void insert(Queue<Integer> q, int k) {
        // Insert the element k into the queue
        q.add(k);
    }

    // Function to find frequency of an element
    // Return the frequency of k
    static int findFrequency(Queue<Integer> q, int k) {
        // Variable to store the count of occurrences of 'k'
        int count = 0;

        // Create a temporary queue to preserve the original queue while iterating
        Queue<Integer> temp = new LinkedList<>(q);

        // Iterate over the elements of the queue
        while (!temp.isEmpty()) {
            // Remove the front element and check if it matches 'k'
            if (temp.remove() == k) {
                count++;  // Increment the count if 'k' is found
            }
        }

        // Return the count of 'k' in the queue
        return count;
    }
}



//{ Driver Code Starts.

// Driver class with driver code
class GFG {

    // Driver code
    public static void main(String[] args) {

        // Taking input using scanner class
        Scanner sc = new Scanner(System.in);
        int testcase = sc.nextInt();
        sc.nextLine();
        while (testcase-- > 0) {
            // Declaring Queue
            Queue<Integer> q = new LinkedList<>();
            String temp[] = sc.nextLine().trim().split(" ");
            int n = temp.length;

            // Invoking object of Geeks class
            Geeks obj = new Geeks();

            for (int i = 0; i < n; i++) {
                int k = Integer.parseInt(temp[i]);
                obj.insert(q, k);
            }
            temp = sc.nextLine().trim().split(" ");
            int x = temp.length;
            for (int i = 0; i < x; i++) {
                int k = Integer.parseInt(temp[i]);
                int f = obj.findFrequency(q, k);
                if (f != 0) {
                    System.out.println(f);
                } else {
                    System.out.println("-1");
                }
            }
        }
    }
}
// } Driver Code Ends