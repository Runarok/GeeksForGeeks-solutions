//{ Driver Code Starts
// Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;
import java.util.ListIterator;

class GFG {
    public static void main(String[] args) {

        // taking input using class Scanner
        Scanner sc = new Scanner(System.in);

        // taking total count of testcases
        int t = Integer.parseInt(sc.nextLine());
        while (t-- > 0) {
            // taking total count of elements
            String temp[] = sc.nextLine().trim().split(" ");
            int n = temp.length;

            // Declaring and Initalizing a new ArrayList
            int arr[] = new int[n];

            // adding elements to the ArrayList
            for (int i = 0; i < n; i++) {
                arr[i] = Integer.parseInt(temp[i]);
            }

            // taking the element to be erased
            int x = Integer.parseInt(sc.nextLine());
            // converting ArrayList to TreeSet
            TreeSet<Integer> s = insert(arr);

            // displaying the TreeSet elements
            display(s);
            System.out.println();

            // erasing x from TreeSet
            erase(s, x);
            System.out.println();

            // displaying the TreeSet elements
            display(s);
            System.out.println();

            System.out.println("~");
        }
    }

    
// } Driver Code Ends

// User function Template for Java

// Takes an array as an argument and inserts the elements into a TreeSet
// and returns the TreeSet.
public static TreeSet<Integer> insert(int arr[]) {
    // Create a TreeSet to store unique elements in sorted order
    TreeSet<Integer> result = new TreeSet<>();
    
    // Add each element of the array to the TreeSet
    for (int num : arr) {
        result.add(num);
    }
    
    // Return the populated TreeSet
    return result;
}

// Takes a TreeSet as an argument and prints the elements
// The newline is provided by the driver code.
public static void display(TreeSet<Integer> s) {
    // Print each element of the TreeSet, separated by a space
    for (Integer n : s) {
        System.out.print(n + " ");
    }
}

// Takes TreeSet and x as arguments and erases x from the TreeSet.
// If erased, print "erased x"; otherwise, print "not found".
// The newline is provided by the driver code.
public static void erase(TreeSet<Integer> s, int x) {
    // Check if x is present in the TreeSet
    if (s.contains(x)) {
        // Remove x from the TreeSet and print the confirmation message
        s.remove(x);
        System.out.print("erased " + x);
    } else {
        // Print "not found" if x is not present
        System.out.print("not found");
    }
}



//{ Driver Code Starts.
}

// } Driver Code Ends