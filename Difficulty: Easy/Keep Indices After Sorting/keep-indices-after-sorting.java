//{ Driver Code Starts
// Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) {

        // using Scanner class to take input
        Scanner sc = new Scanner(System.in);

        // taking testcases count
        int t = sc.nextInt();
        sc.nextLine();
        while (t-- > 0) {
            // Declaring and Initializing an Integer ArrayList
            String temp[] = sc.nextLine().trim().split(" ");

            // taking elements count
            int n = temp.length;
            int arr[] = new int[n];
            // adding elements to the ArrayList
            for (int i = 0; i < n; i++) {
                arr[i] = Integer.parseInt(temp[i]);
            }

            // calling sortedWithIndices() method of class
            // Sorting and storing the result in new ArrayList
            ArrayList<ArrItem> ans = new Sorting().sortedWithIndices(arr);

            // printing the elements of the ArrayList
            for (ArrItem i : ans) System.out.print("(" + i.item + "," + i.index + ") ");
            System.out.println();
        }
    }
}

// creating a class ArrItem
// which has item and index
// as members
class ArrItem {
    public int item;
    public int index;

    public ArrItem(int item, int index) {
        this.item = item;
        this.index = index;
    }
}


// } Driver Code Ends

// User function Template for Java

/*
class ArrItem {
    public int item;  // Stores the value of the array element
    public int index; // Stores the original index of the element

    public ArrItem(int item, int index) {
        this.item = item;
        this.index = index;
    }
}
*/

// Comparator to sort ArrItem objects based on item value, maintaining original order for duplicates
class Mycmp implements Comparator<ArrItem> {
    public int compare(ArrItem first, ArrItem second) {
        if (first.item == second.item) {
            return first.index - second.index; // Maintain original order for equal elements
        }
        return first.item - second.item; // Sort by item value
    }
}

class Sorting {
    public ArrayList<ArrItem> sortedWithIndices(int arr[]) {
        // Create a list to store ArrItem objects (value-index pairs)
        ArrayList<ArrItem> itemList = new ArrayList<>();
        int size = arr.length;

        // Populate the list with array elements and their original indices
        for (int i = 0; i < size; i++) {
            itemList.add(new ArrItem(arr[i], i));
        }

        // Sort the list using the custom comparator
        Collections.sort(itemList, new Mycmp());

        return itemList;
    }
}


//{ Driver Code Starts.

// } Driver Code Ends