//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int t;
        t = sc.nextInt();
        while (t-- > 0) {

            int n = sc.nextInt();
            int k = sc.nextInt();
            int[] candidates = new int[n];
            for (int i = 0; i < n; i++) candidates[i] = sc.nextInt();

            Solution obj = new Solution();
            List<List<Integer>> ans = obj.combinationSum2(candidates, k);
            Collections.sort(ans, new Comparator<List<Integer>>() {
                @Override   public int compare(List<Integer> a, List<Integer> b) {
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
            System.out.print("[ ");
            for (int i = 0; i < ans.size(); i++) {
                System.out.print("[ ");
                for (int j = 0; j < ans.get(i).size(); j++)
                    System.out.print(ans.get(i).get(j) + " ");
                System.out.print("]");
            }
            System.out.println(" ]");
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

class Solution {
    
    /**
     * Helper function to generate combinations that sum up to the target `k`
     * @param ind Starting index for the current recursion
     * @param ds A temporary list to store the current combination
     * @param a The input array
     * @param n The length of the array
     * @param k The remaining sum to find
     * @param res The result list of all combinations
     */
    static void combinationsum2(int ind, List<Integer> ds, int[] a, int n, int k, List<List<Integer>> res) {
        // If the remaining sum is 0, add the current combination to the result
        if(k == 0){
            res.add(new ArrayList<>(ds));
            return;
        }
        
        for(int i = ind; i < n; i++) {
            // Skip duplicate elements to avoid repeated combinations
            if(i > ind && a[i] == a[i - 1]) continue;
            
            // If the current element is less than or equal to the remaining sum
            if(a[i] <= k){
                // Add the element to the current combination
                ds.add(a[i]);
                // Recur with reduced sum and next index
                combinationsum2(i + 1, ds, a, n, k - a[i], res);
                // Backtrack by removing the last added element
                ds.remove(ds.size() - 1);
            }
        }
    }
    
    /**
     * Function to find all unique combinations in the array `a` that sum up to `s`
     * @param a The input array of integers
     * @param s The target sum
     * @returns List of unique combinations that sum up to `s`
     */
    public static List<List<Integer>> combinationSum2(int[] a, int s) {
        Arrays.sort(a);  // Sort the array to handle duplicates
        List<List<Integer>> res = new ArrayList<>();  // Result list to store the combinations
        List<Integer> ds = new ArrayList<>();  // Temporary list to build the current combination
        int n = a.length;
        
        // Start the recursive function with the initial values
        combinationsum2(0, ds, a, n, s, res);
        
        return res;  // Return the result
    }
}
