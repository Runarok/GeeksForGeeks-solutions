//{ Driver Code Starts
import java.io.*;
import java.util.*;

class IntArray {
    public static int[] input(BufferedReader br, int n) throws IOException {
        String[] s = br.readLine().trim().split(" ");
        int[] a = new int[n];
        for (int i = 0; i < n; i++) a[i] = Integer.parseInt(s[i]);

        return a;
    }

    public static void print(int[] a) {
        for (int e : a) System.out.print(e + " ");
        System.out.println();
    }

    public static void print(ArrayList<Integer> a) {
        for (int e : a) System.out.print(e + " ");
        System.out.println();
    }
}

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t;
        t = Integer.parseInt(br.readLine());
        while (t-- > 0) {

            int n;
            n = Integer.parseInt(br.readLine());

            int[] arr = IntArray.input(br, n);

            int indexDifference;
            indexDifference = Integer.parseInt(br.readLine());

            int valueDifference;
            valueDifference = Integer.parseInt(br.readLine());

            Solution obj = new Solution();
            boolean res =
                obj.closestSimilarElements(n, arr, indexDifference, valueDifference);

            int _result_val = (res) ? 1 : 0;
            System.out.println(_result_val);
        }
    }
}

// } Driver Code Ends

class Solution {
    
     // Helper class to store a pair of integers (x1, x2)
     static class Pair {
        int x1, x2;
        
        public Pair(int x1, int x2) {
            this.x1 = x1;
            this.x2 = x2;
        }
        
        @Override
        public boolean equals(Object o) {
            if (this == o) {
                return true;
            }
            if (o == null || getClass() != o.getClass()) {
                return false;
            }
            Pair p = (Pair) o;
            return p.x1 == x1 && p.x2 == x2;
        }
        
        @Override
        public int hashCode() {
            return Objects.hash(x1, x2);
        }
    }
    
    public static boolean closestSimilarElements(int n, int[] arr, int id, int vd) {
        
        // TreeSet to store pairs of values, sorted first by x1, and if equal, by x2
        TreeSet<Pair> s = new TreeSet<>((a, b) -> {
            if (a.x1 == b.x1) {
                return Integer.compare(a.x2, b.x2);
            }
            return Integer.compare(a.x1, b.x1);
        });
        
        // Add elements up to the index id into the TreeSet
        for (int i = 0; i <= id && i < n; i++) {
            s.add(new Pair(arr[i], i));
        }
        
        int j = -id;
        int i = id + 1;
        int k = 0;
        
        while (k < n) {
            // Remove the current element (k-th element) from the set
            s.remove(new Pair(arr[k], k));
             
            int val1 = arr[k] - vd; // Lower bound value for comparison
            int val2 = arr[k] + vd + 1; // Upper bound value for comparison
             
            // Check if there's an element in the set whose value is within the allowed difference
            if (s.ceiling(new Pair(val1, -1)) != null) {
                if (Math.abs(s.ceiling(new Pair(val1, -1)).x1 - arr[k]) <= vd) {
                    return true; // Found a pair within the range, return true
                }
            }
             
            if (s.lower(new Pair(val2, -1)) != null) {
                if (Math.abs(s.lower(new Pair(val2, -1)).x1 - arr[k]) <= vd) {
                    return true; // Found a pair within the range, return true
                }
            }
             
            // Re-add the current element back into the set
            s.add(new Pair(arr[k], k));
            
            k++;
            i++;
            j++;
            
            // Add new elements within the window
            if (i < arr.length) {
                s.add(new Pair(arr[i], i));
            }
            if (j >= 0) {
                s.remove(new Pair(arr[j], j));
            }
        }
        
        return false; // No such pair found
    }
}
