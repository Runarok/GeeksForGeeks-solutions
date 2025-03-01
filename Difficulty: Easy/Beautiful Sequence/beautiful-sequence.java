//{ Driver Code Starts
// Initial Template for Java

import java.util.*;
import java.lang.*;
import java.io.*;
class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while (T-- > 0) {
            int N = Integer.parseInt(br.readLine().trim());
            Solution ob = new Solution();
            int[] ans = ob.FindSequenece(N);
            int x = 1;
            for (int i = 1; i < ans.length; i++)
                if (ans[i] <= ans[i - 1] || ans[i - 1] == 0 || ans[i] % ans[i - 1] != 0) {
                    x = 0;
                    break;
                }
            if(ans[ans.length - 1] != N)
                x = 0;
            
            System.out.println(ans.length + " " + x);
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    public int[] FindSequenece(int N) {
        // Initialize an ArrayList to store the sequence
        ArrayList<Integer> al = new ArrayList<>();
        
        // Loop through integers starting from 2 up to the square root of N
        for(int i = 2; i <= Math.sqrt(N); i++) {
            // While i is a divisor of N, add N to the list and divide N by i
            while(N % i == 0) {
                al.add(N);
                N /= i;
            }
        }
        
        // If N is greater than 1, add it to the list as a prime factor
        if(N > 1) {
            al.add(N);
        }
        
        // Add 1 to the list as the final element (for all cases)
        al.add(1);
        
        // Reverse the list to get the factors in descending order
        Collections.reverse(al);
        
        // Convert the ArrayList to an array of integers
        int[] arr = new int[al.size()];
        for(int i = 0; i < al.size(); i++) {
            arr[i] = al.get(i);
        }
        
        // Return the array
        return arr;
    }
}
