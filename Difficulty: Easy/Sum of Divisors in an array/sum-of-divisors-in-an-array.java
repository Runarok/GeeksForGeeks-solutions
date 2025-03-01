//{ Driver Code Starts
// Initial Template for Java
import java.util.*;
import java.lang.*;
import java.io.*;
class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(read.readLine().trim());
        while (T-- > 0) {
            int N = Integer.parseInt(read.readLine());
            String input_line[] = read.readLine().trim().split("\\s+");
            int arr[] = new int[N];
            for (int i = 0; i < N; i++)
                arr[i] = Integer.parseInt(input_line[i]);
            Solution ob = new Solution();
            int[] ans = ob.sumOfProperDivisors(arr, N);
            for (int i = 0; i < ans.length; i++) {
                System.out.print(ans[i] + " ");
            }
            System.out.println();
        }
    }
}

// } Driver Code Ends

class Solution {
    // Function to find the sum of proper divisors for each element in the array
    public int[] sumOfProperDivisors(int arr[], int N) {
        // Sieve array to store the sum of divisors for each number from 2 to 100
        int[] sieve = new int[101];
        
        // Populate the sieve array with the sum of divisors for each number
        for (int i = 2; i <= 100; i++) {
            // Add i to all its multiples to calculate the sum of divisors
            for (int j = i + i; j <= 100; j += i) {
                sieve[j] += i;
            }
        }

        // Result array to store the sum of proper divisors for each number in arr
        int[] res = new int[N];
        int index = 0;

        // Loop through the input array and calculate the sum of proper divisors
        for (int val : arr) {
            // For value 1, the sum of proper divisors is 0
            res[index++] = (val == 1) ? 0 : sieve[val] + 1; // +1 to include the number itself
        }

        // Return the array with the sum of proper divisors for each element
        return res;
    }
}
