//{ Driver Code Starts
// Initial Template for Java

import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;

class Main {

    
// } Driver Code Ends

// User function Template for Java

public static ArrayList<Integer> getSmaller(int arr[], int target) {
    // Create an ArrayList to store elements smaller than the target
    ArrayList<Integer> result = new ArrayList<>();

    // Iterate through the array and add elements that are smaller than the target
    for (int num : arr) {
        if (num < target) {
            result.add(num);
        }
    }

    // Return the filtered list while maintaining the original order
    return result;
}



//{ Driver Code Starts.

    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        sc.nextLine();
        while (t-- > 0) {
            String temp[] = sc.nextLine().trim().split(" ");
            int n = temp.length;
            int arr[] = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = Integer.parseInt(temp[i]);
            }
            int target = sc.nextInt();
            sc.nextLine();
            ArrayList<Integer> ans = getSmaller(arr, target);

            for (int i = 0; i < ans.size(); i++) System.out.print(ans.get(i) + " ");
            System.out.println();
        }
    }
}

// } Driver Code Ends