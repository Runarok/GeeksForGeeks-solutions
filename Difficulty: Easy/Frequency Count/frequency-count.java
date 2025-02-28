//{ Driver Code Starts
// Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) {

        // taking input using Scanner class
        Scanner sc = new Scanner(System.in);

        // taking total testcases
        int t = sc.nextInt();
        sc.nextLine();
        while (t-- > 0) {
            // taking total elements
            String temp[] = sc.nextLine().trim().split(" ");
            int n = temp.length;

            // Declaring a new ArrayList
            int arr[] = new int[n];

            // adding elements to the ArrayList
            for (int i = 0; i < n; i++) {
                arr[i] = Integer.parseInt(temp[i]);
            }

            // calling the frequncyCount method and
            // storing the result in new ArrayList
            ArrayList<Integer> ans = frequencyCount(arr);

            // printing the elements
            // of the ArrayList
            for (int i : ans) System.out.print(i + " ");

            System.out.println();

            System.out.println("~");
        }
    }

    
// } Driver Code Ends

public static ArrayList<Integer> frequencyCount(int arr[]) {
    // Create a map to store the frequency count of each element
    LinkedHashMap<Integer, Integer> countMap = new LinkedHashMap<>();
    
    // Iterate through the array to count the frequencies
    for(int num : arr) {
        countMap.put(num, countMap.getOrDefault(num, 0) + 1);
    }
    
    // Extract the frequency values into an ArrayList
    ArrayList<Integer> res = new ArrayList<>(countMap.values());
    
    return res; // Return the list of frequencies
}



//{ Driver Code Starts.
}
// } Driver Code Ends