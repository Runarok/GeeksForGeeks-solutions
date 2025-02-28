//{ Driver Code Starts
// Initial Template for Java

// Initial Template for Java

import java.io.*;
import java.util.*;

class Gfg {
    public static void main(String[] args) {

        // Taking input using class Scanner
        Scanner sc = new Scanner(System.in);

        // Taking total count of testcases
        int testcases = Integer.parseInt(sc.nextLine());
        while (testcases-- > 0) {
            // taking size of array
            String temp[] = sc.nextLine().trim().split(" ");
            int N = temp.length;
            int arr[] = new int[N]; // array declaration

            for (int i = 0; i < N; i++)
                arr[i] = Integer.parseInt(temp[i]); // Input the
                                                    // array

            int sum = 0;

            // taking sum
            sum = Integer.parseInt(sc.nextLine());
            // Creating an object of class Geeks
            Geeks obj = new Geeks();

            // Calling sumExists method of class Geeks
            // and printing the result
            System.out.println(obj.sumExists(arr, sum));

            System.out.println("~");
        }
    }
}


// } Driver Code Ends

class Geeks {
    // Function to check if two numbers in the array have a sum equal to the given sum
    public static int sumExists(int arr[], int sum) {
        // Use a LinkedHashSet to store elements and check for the complement of each element
        LinkedHashSet<Integer> al = new LinkedHashSet<>();
        
        // Iterate through the array to find if any two numbers sum up to the target sum
        for (int i : arr) {
            // Calculate the complement that, when added to the current element, equals the target sum
            int diff = sum - i;
            
            // If the complement already exists in the set, we found the pair
            if (al.contains(diff)) {
                return 1;  // Return 1 if a pair exists
            }
            
            // Add the current element to the set
            al.add(i);
        }
        
        // Return 0 if no such pair exists
        return 0;
    }
}



//{ Driver Code Starts.

// } Driver Code Ends