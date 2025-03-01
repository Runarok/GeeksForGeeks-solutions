//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.lang.*;
import java.util.*;

class GFG {

    public static void main(String[] args) {
        // Taking input using Scanner class
        Scanner sc = new Scanner(System.in);

        // taking count of total testcases
        int t = sc.nextInt();

        boolean flag = false;
        while (t-- > 0) {

            // taking the String
            String s = sc.next();

            Geeks obj = new Geeks();

            // calling follPatt() method
            // of class Geeks and passing
            // String as parameter
            System.out.println(obj.follPatt(s));

            System.out.println("~");
        }
    }
}


// } Driver Code Ends

class Geeks {

    // Function to check if the given string follows a specific pattern.
    int follPatt(String s) {
        // Convert the string to a character array.
        char arr[] = s.toCharArray();
        int n = arr.length;
        boolean flag = true;

        // Iterating over each character of the string.
        for (int i = 0; i < n; i++) {
            // If the character is not 'x', set the flag to false and break the loop.
            if (arr[i] != 'x') {
                flag = false;
                break;
            }

            // Counting consecutive occurrences of 'x'.
            int countX = 1, countY = 0;
            while (i + 1 < n && arr[i + 1] == 'x') {
                ++i;
                ++countX;
            }

            // Counting consecutive occurrences of 'y'.
            while (i + 1 < n && arr[i + 1] == 'y') {
                ++i;
                ++countY;
            }

            // If the count of 'x' is not equal to the count of 'y',
            // set the flag to false and break the loop.
            if (countX != countY) {
                flag = false;
                break;
            }
        }

        // Return 1 if the flag is true, else return 0.
        return ((flag ? 1 : 0));
    }
}


//{ Driver Code Starts.

// } Driver Code Ends