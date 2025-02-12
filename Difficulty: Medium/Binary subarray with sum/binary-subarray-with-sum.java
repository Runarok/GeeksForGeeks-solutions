//{ Driver Code Starts
// Initial Template for Java

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        sc.nextLine(); // consume the newline character after reading the integer

        while (t-- > 0) {
            String input = sc.nextLine();
            String[] inputArray = input.split(" ");
            int[] arr = new int[inputArray.length];

            for (int i = 0; i < inputArray.length; i++) {
                arr[i] = Integer.parseInt(inputArray[i]);
            }

            int target = sc.nextInt();
            if (sc.hasNextLine())
                sc.nextLine(); // consume the newline after reading target

            Solution obj = new Solution();
            System.out.println(obj.numberOfSubarrays(arr, target));
            System.out.println("~");
        }

        sc.close();
    }
}
// } Driver Code Ends

class Solution {
    /**
     * Function to find the number of subarrays with sum equal to `target`
     * @param arr The input array
     * @param target The target sum to find subarrays for
     * @returns The number of subarrays whose sum is equal to `target`
     */
    public int numberOfSubarrays(int[] arr, int target) {
        int sum = 0;  // To keep track of the cumulative sum of elements
        int cnt = 0;  // To count the number of subarrays with sum equal to `target`
        
        // HashMap to store the frequency of cumulative sums encountered so far
        HashMap<Integer, Integer> map = new HashMap<>();
        map.put(0, 1);  // Initialize with sum 0 having a frequency of 1 (for subarrays that directly match the target)
        
        for(int i = 0; i < arr.length; i++) {
            sum += arr[i];  // Add the current element to the cumulative sum
            
            // Check if there is a previous sum that, when subtracted from the current sum, equals the target
            if(map.containsKey(sum - target)) {
                cnt += map.get(sum - target);  // Add the frequency of that previous sum to the count
            }
            
            // Update the frequency of the current cumulative sum in the HashMap
            map.put(sum, map.getOrDefault(sum, 0) + 1);
        }
        
        return cnt;  // Return the total count of subarrays whose sum equals the target
    }
}