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
            // taking total count of elements
            String temp[] = sc.nextLine().trim().split(" ");
            int n = temp.length;

            // creating an array of size n and type int
            ArrayList<Integer> list = new ArrayList<>();

            // inserting elements to the array
            for (int i = 0; i < n; i++) list.add(Integer.parseInt(temp[i]));

            // calling the sortArray() method
            // and passing array and size
            sortArrayList(list);

            // printing the elements
            // of the ArrayList
            for (int i : list) System.out.print(i + " ");

            System.out.println();
        }
    }

    
// } Driver Code Ends
// User function Template for Java

public static void sortArrayList(ArrayList<Integer> numberList) {
    // Sort the ArrayList in ascending order
    Collections.sort(numberList);
}


//{ Driver Code Starts.
}

// } Driver Code Ends