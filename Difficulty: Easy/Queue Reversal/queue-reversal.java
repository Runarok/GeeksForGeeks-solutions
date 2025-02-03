//{ Driver Code Starts
import java.io.*;
import java.util.*;

class Reversing {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // Reading total number of testcases
        int t = Integer.parseInt(br.readLine());
        while (t-- > 0) {

            // Reading total number of elements

            // Creating a Queue
            Queue<Integer> q = new LinkedList<>();

            // Reading all the elements in a string
            String s = br.readLine().trim();

            // Spliting the string into different
            // string separated by space
            String[] a = s.split(" ");

            // adding all the elements to the Queue
            for (String b : a) {
                int x = Integer.parseInt(b);
                q.add(x);
            }

            // Creating an object of class Geeks
            GfG g = new GfG();

            // calling rev method of class Geeks
            q = g.rev(q);

            // printing the elements of the queue
            while (!q.isEmpty()) {
                int x = q.peek();
                q.poll();
                System.out.print(x + " ");
            }
            System.out.println();
        }
    }
}
// } Driver Code Ends


// Back-end complete function Template for Java

class GfG {
    // Function to reverse the queue.
    public Queue<Integer> rev(Queue<Integer> q) {
        // using a stack to reverse the queue.
        Stack<Integer> s = new Stack<>();

        // pushing elements from queue into stack and removing them from queue.
        while (!q.isEmpty()) {
            int x = q.peek();
            q.poll();
            s.push(x);
        }

        // now pushing elements back into the queue from stack and removing them
        // from stack. queue gets reversed as stack follows last in first out.
        while (!s.isEmpty()) {
            int x = s.peek();
            s.pop();
            q.add(x);
        }
        // returning reversed queue.
        return q;
    }
}
