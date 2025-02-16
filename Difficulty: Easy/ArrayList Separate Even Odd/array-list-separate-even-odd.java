//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {

    
// } Driver Code Ends
// User function Template for Java
public static ArrayList<ArrayList<Integer>> evenOdd(ArrayList<Integer> inputList) {
    // List to store the final result (even numbers list and odd numbers list)
    ArrayList<ArrayList<Integer>> resultLists = new ArrayList<>();
    
    // List to store even numbers
    ArrayList<Integer> evenNumbers = new ArrayList<>();
    
    // List to store odd numbers
    ArrayList<Integer> oddNumbers = new ArrayList<>();
    
    // Iterate through the input list and separate numbers into even and odd lists
    for (Integer number : inputList) {
        if (number % 2 == 0) {
            evenNumbers.add(number); // Add even numbers to the evenNumbers list
        } else {
            oddNumbers.add(number);  // Add odd numbers to the oddNumbers list
        }
    }
    
    // Add both lists to the resultLists, maintaining the order: even numbers first, odd numbers second
    resultLists.add(evenNumbers);
    resultLists.add(oddNumbers);
    
    return resultLists;
}


//{ Driver Code Starts.

    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));

        int t = Integer.parseInt(read.readLine());

        while (t-- > 0) {
            String input[] = read.readLine().trim().split("\\s+");

            ArrayList<Integer> list = new ArrayList<Integer>();

            for (int i = 0; i < input.length; i++) {
                list.add(Integer.parseInt(input[i]));
            }

            ArrayList<ArrayList<Integer>> evenOdd = evenOdd(list);

            Iterator<Integer> even = evenOdd.get(0).iterator();

            while (even.hasNext()) {
                System.out.print(even.next() + " ");
            }

            System.out.println();

            Iterator<Integer> odd = evenOdd.get(1).iterator();

            while (odd.hasNext()) {
                System.out.print(odd.next() + " ");
            }
            System.out.println();

            System.out.println("~");
        }
    }
}
// } Driver Code Ends