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
        int t = Integer.parseInt(sc.nextLine());
        while (t-- > 0) {
            // taking number of elements
            String temp[] = sc.nextLine().trim().split(" ");
            int n = temp.length;

            // taking the value to be searched
            int k = Integer.parseInt(sc.nextLine());
            // creating an array of size n
            ArrayList<Integer> list = new ArrayList<>();

            // inserting elements to the array
            for (int i = 0; i < n; i++) list.add(Integer.parseInt(temp[i]));

            // calling method binarySearchAL
            // and passing ArrayList and x as
            // arguments and printing the result
            System.out.println(binarySearchAL(list, k));

            System.out.println("~");
        }
    }

    
// } Driver Code Ends


// User function Template for Java

public static int binarySearchAL(ArrayList<Integer> list, int k) {
    // Performing binary search on the list
    return binarySearchHelper(list, k, 0, list.size() - 1);
}

// Helper function to perform recursive binary search
public static int binarySearchHelper(ArrayList<Integer> list, int k, int low, int high) {
    // Base case: if low index exceeds high index, element is not found
    if (low > high)
        return -1;

    int mid = (low + high) / 2;

    // If the middle element matches k, return its index
    if (list.get(mid) == k)
        return mid;
    
    // If k is greater, search in the right half
    if (k > list.get(mid))
        return binarySearchHelper(list, k, mid + 1, high);
    
    // Otherwise, search in the left half
    return binarySearchHelper(list, k, low, mid - 1);
}



//{ Driver Code Starts.
}
// } Driver Code Ends