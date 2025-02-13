//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;
class GFG {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        PrintWriter ot = new PrintWriter(System.out);
        int t;
        t = sc.nextInt();
        while (t-- > 0) {
            int n;
            n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();

            Solution obj = new Solution();
            ArrayList<ArrayList<Integer>> ans = obj.printUniqueSubsets(nums);
            Collections.sort(ans, new Comparator<ArrayList<Integer>>() {
                @Override   public int compare(ArrayList<Integer> a,
                                             ArrayList<Integer> b) {
                    int al = a.size();
                    int bl = b.size();
                    int min = Math.min(al, bl);
                    for (int i = 0; i < min; i++) {
                        if (a.get(i) < b.get(i))
                            return -1;
                        else if (a.get(i) > b.get(i))
                            return 1;
                    }
                    if (al < bl)
                        return -1;
                    else if (al > bl)
                        return 1;
                    return -1;
                }
            });
            ot.print("[ ");
            for (int i = 0; i < ans.size(); i++) {
                ot.print("[ ");
                for (int j = 0; j < ans.get(i).size(); j++)
                    ot.print(ans.get(i).get(j) + " ");
                ot.print("]");
            }
            ot.println(" ]");
        }
        ot.close();
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to return all unique subsets of a given array
    public static ArrayList<ArrayList<Integer>> printUniqueSubsets(int[] nums) {
        // Set to store unique subsets (HashSet is used to avoid duplicates)
        Set<ArrayList<Integer>> ans5 = new HashSet<ArrayList<Integer>>();

        // Sort the array to handle duplicates more easily
        Arrays.sort(nums);

        // Call the helper function to generate subsets
        sumsubsetsII(nums, new ArrayList<Integer>(), 0, ans5);

        // Convert the result set to an ArrayList
        ArrayList<ArrayList<Integer>> result = new ArrayList<>(ans5);

        // Return the result
        return result;
    }

    // Helper function to recursively generate subsets
    public static void sumsubsetsII(int[] arr, ArrayList<Integer> ds, int ind, Set<ArrayList<Integer>> ans) {
        // If the index is beyond the array length, add the current subset to the result
        if (ind >= arr.length) {
            ans.add(new ArrayList<Integer>(ds)); // Add the current subset to the set of unique subsets
            return;
        }

        // Include the current element and move to the next index
        ds.add(arr[ind]);
        sumsubsetsII(arr, ds, ind + 1, ans); // Recursive call with inclusion

        // Backtrack by removing the last added element
        ds.remove(ds.size() - 1);

        // Move to the next index without including the current element
        sumsubsetsII(arr, ds, ind + 1, ans); // Recursive call with exclusion
    }
}
