//{ Driver Code Starts
// Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;


// } Driver Code Ends

// User function Template for Java

class Solution {
    public static ArrayList<Integer> arrangeOddAndEven(int arr[]) {
        // Get the total number of elements in the array
        int n = arr.length;

        // Separate even and odd numbers into their respective lists
        ArrayList<Integer> evenNumbers = new ArrayList<>();
        ArrayList<Integer> oddNumbers = new ArrayList<>();

        for (int num : arr) {
            if (num % 2 == 0) {
                evenNumbers.add(num);
            } else {
                oddNumbers.add(num);
            }
        }

        // List to store the final arrangement of numbers
        ArrayList<Integer> resultList = new ArrayList<>();

        // Pointers to track positions in even and odd lists
        int evenIndex = 0;
        int oddIndex = 0;

        // Alternately place even and odd numbers in the result list
        for (int i = 0; i < n; i++) {
            if (i % 2 == 0 && evenIndex < evenNumbers.size()) {
                resultList.add(evenNumbers.get(evenIndex));
                evenIndex++;
            } else {
                resultList.add(oddNumbers.get(oddIndex));
                oddIndex++;
            }
        }

        // If any even numbers remain, add them to the result list
        while (evenIndex < evenNumbers.size()) {
            resultList.add(evenNumbers.get(evenIndex));
            evenIndex++;
        }

        // If any odd numbers remain, add them to the result list
        while (oddIndex < oddNumbers.size()) {
            resultList.add(oddNumbers.get(oddIndex));
            oddIndex++;
        }

        return resultList;
    }
}



//{ Driver Code Starts.

// Driver class
class Array {

    // Driver code
    public static void main(String[] args) throws IOException {
        // Taking input using buffered reader
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        while (t-- > 0) {

            String line = br.readLine();
            String[] tokens = line.split(" ");

            // Create an ArrayList to store the integers
            ArrayList<Integer> array = new ArrayList<>();

            // Parse the tokens into integers and add to the array
            for (String token : tokens) {
                array.add(Integer.parseInt(token));
            }

            int[] arr = new int[array.size()];
            int idx = 0;
            for (int i : array) arr[idx++] = i;
            Solution obj = new Solution();
            ArrayList<Integer> ans;
            ans = obj.arrangeOddAndEven(arr);
            for (int i : ans) System.out.print(i + " ");
            System.out.println();
            System.out.println("~");
        }
    }
}

// } Driver Code Ends