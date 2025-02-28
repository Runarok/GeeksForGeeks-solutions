//{ Driver Code Starts
import java.io.*;
import java.util.*;


// } Driver Code Ends

class Solution {
    List<List<Integer>> findTasks(int[] arr, int k) {
        // List to store the tasks for Tanya and Manya
        List<Integer> tanyaTasks = new ArrayList<>();
        List<Integer> manyaTasks = new ArrayList<>();
        
        // Set to keep track of completed tasks
        Set<Integer> completedTasks = new HashSet<>();
        
        // Mark the completed tasks
        for (int task : arr) {
            completedTasks.add(task);
        }
        
        // Traverse all tasks from 1 to k and assign to Tanya and Manya
        boolean isTanyaTurn = true;
        for (int i = 1; i <= k; i++) {
            if (!completedTasks.contains(i)) {
                // Alternate between Tanya and Manya
                if (isTanyaTurn) {
                    tanyaTasks.add(i);
                } else {
                    manyaTasks.add(i);
                }
                isTanyaTurn = !isTanyaTurn; // Toggle turn
            }
        }
        
        // Prepare the result list containing both lists for Tanya and Manya
        List<List<Integer>> result = new ArrayList<>();
        result.add(tanyaTasks);
        result.add(manyaTasks);
        
        return result;
    }
}




//{ Driver Code Starts.
public class Main {

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        while (t-- > 0) {

            // Read the line and split the tokens
            String line = br.readLine();
            String[] tokens = line.split(" ");

            // Create an array of integers from the tokens
            ArrayList<Integer> array = new ArrayList<>();
            for (String token : tokens) {
                array.add(Integer.parseInt(token));
            }

            // Convert the ArrayList to an int array
            int[] arr = new int[array.size()];
            int idx = 0;
            for (int i : array) {
                arr[idx++] = i;
            }

            // Read the value of k
            int k = Integer.parseInt(br.readLine());

            // Create Solution object and find the tasks
            Solution ob = new Solution();
            List<List<Integer>> ans = ob.findTasks(arr, k);

            // Output Tanya's tasks (first list)
            for (Integer x : ans.get(0)) {
                System.out.print(x + " ");
            }
            System.out.println();

            // Output Manya's tasks (second list)
            for (Integer x : ans.get(1)) {
                System.out.print(x + " ");
            }
            System.out.println();

            // Print separator between test cases
            System.out.println("~");
        }
    }
}

// } Driver Code Ends