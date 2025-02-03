//{ Driver Code Starts
import java.io.*;
import java.lang.*;
import java.util.*;


// } Driver Code Ends
// User function Template for Java

class Solution {
    public List<Integer> twoSum(int arr[], int target) {
        // Use a set to store the differences
        Set<Integer> seenNumbers = new HashSet<>();
        
        // Traverse through the array to find the pair
        for (int number : arr) {
            // Calculate the difference needed to reach the target sum
            int requiredDifference = target - number;
            
            // If the difference is already in the set, return the pair
            if (seenNumbers.contains(requiredDifference)) {
                List<Integer> pair = new ArrayList<>(2);
                pair.add(requiredDifference);
                pair.add(number);
                return pair;
            }  
            
            // Add the current number to the set for future comparisons
            seenNumbers.add(number);
        }
        
        // Return an empty list if no pair is found
        return Collections.<Integer>emptyList();
    }
}



//{ Driver Code Starts.

class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());

        while (t-- > 0) {
            String line = read.readLine().trim();
            String[] numsStr = line.split(" ");
            int[] nums = new int[numsStr.length];
            for (int i = 0; i < numsStr.length; i++) {
                nums[i] = Integer.parseInt(numsStr[i]);
            }

            int target = Integer.parseInt(read.readLine());

            Solution obj = new Solution();

            List<Integer> ans = obj.twoSum(nums, target);
            if (ans.size() == 0) {
                System.out.println("[]");
            } else {
                Collections.sort(ans);
                for (int i = 0; i < ans.size(); i++) {
                    System.out.print(ans.get(i) + " ");
                }
                System.out.println();
            }
            System.out.println("~");
        }
    }
}
// } Driver Code Ends