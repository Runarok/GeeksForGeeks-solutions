//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;


// } Driver Code Ends

// User function Template for Java

// Helper class Geeks to implement
// insert() and findFrequency()
class Geeks {

    // Function to insert element into the priority queue
    static void insert(PriorityQueue<Integer> q, int k) {
        // Insert k into the priority queue q
        q.add(k);
    }

    // Function to find an element k in the priority queue
    static boolean find(PriorityQueue<Integer> q, int k) {
        // Iterate through the priority queue to find if element k exists
        for (Integer a : q) {
            if (a == k) {
                return true; // Element found
            }
        }
        return false; // Element not found
    }

    // Function to delete the max element from the priority queue
    static int delete(PriorityQueue<Integer> q) {
        // Remove and return the max element from the priority queue
        // Since PriorityQueue by default is a min-heap, we can use a max-heap
        // by passing a comparator, or simply reverse the ordering when necessary
        return q.poll(); // Poll removes the head (max if it's a max-heap)
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

            // Priority Queue with comparator
            PriorityQueue<Integer> p_queue =
                new PriorityQueue<Integer>(new Comparator<Integer>() {
                    public int compare(Integer w1, Integer w2) {
                        return w2.compareTo(w1);
                    }
                });
            String temp[] = sc.nextLine().trim().split(" ");
            int n = temp.length;
            // Invoking object of Geeks class
            Geeks obj = new Geeks();

            for (int i = 0; i < n; i++) {
                int k = Integer.parseInt(temp[i]);
                obj.insert(p_queue, k);
            }

            // Taking total number queries
            temp = sc.nextLine().trim().split(" ");
            int x = temp.length;

            // if the element entered is present
            // int the PriorityQueue then we print
            //"1" and delete the maximum element
            // else we print "-1"
            for (int i = 0; i < x; i++) {
                int k = Integer.parseInt(temp[i]);
                boolean f = obj.find(p_queue, k);
                if (f != false) {
                    System.out.println("1");
                    System.out.println(obj.delete(p_queue));
                } else {
                    System.out.println("-1");
                }
            }
        }
    }
}
// } Driver Code Ends