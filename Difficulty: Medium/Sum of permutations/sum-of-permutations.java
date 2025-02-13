//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.lang.*;
import java.util.*;


// } Driver Code Ends

class Solution {

    public int getSum(int arr[]) {
        // Get the length of the input array
        int n = arr.length;
        
        // Calculate the sum of all elements in the array
        long arraySum = 0;
        for (int i = 0; i < n; i++) {
            arraySum += (long) arr[i];
        }
        
        // Compute n! (factorial of n)
        long factorial = 1;
        for (int i = 1; i <= n; i++) {
            factorial *= i;
        }
        
        // Calculate the number of times each digit appears in a specific place
        long digitRepetitionFactor = factorial / (long) n;
        
        // Compute the total sum contributed by all permutations
        long totalPermutationSum = arraySum * digitRepetitionFactor;
        
        long finalSum = 0;
        long result = 0;
        long mod = 1000000007;
        long placeValueMultiplier = 1;

        // Multiply each permutation sum contribution with respective place values
        for (int i = 1; i <= n; i++) {
            finalSum = (totalPermutationSum * placeValueMultiplier) % mod;
            result = (result + finalSum) % mod;
            placeValueMultiplier = (placeValueMultiplier * 10) % mod;
        }

        return (int) result;
    }
}

//{ Driver Code Starts.

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        while (t-- > 0) {
            // int k = Integer.parseInt(br.readLine());
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
            int ans = obj.getSum(arr);
            System.out.println(ans);
            System.out.println("~");
        }
    }
}
// } Driver Code Ends