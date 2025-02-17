//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {

            int N = sc.nextInt();
            ArrayList<Integer> A = new ArrayList<>();
            for (int i = 0; i < N; i++) {
                A.add(sc.nextInt());
            }

            Solution ob = new Solution();
            ArrayList<Integer> B = ob.getXor(A, N);
            for (int i = 0; i < N; i++) {
                System.out.print(B.get(i) + " ");
            }
            System.out.println();
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

class Solution {
    public static ArrayList<Integer> getXor(ArrayList<Integer> list, int n) {
        // Variable to store the cumulative XOR of all elements in the list
        int xorOfList = 0;
        
        // Compute XOR of all elements in the list
        for (int num : list) {
            xorOfList ^= num;
        }

        // ArrayList to store the result
        ArrayList<Integer> ans = new ArrayList<>();
        
        // For each element in the list, add the result of XOR between xorOfList and the current element
        for (int num : list) {
            ans.add(xorOfList ^ num);
        }
        
        // Return the final ArrayList with the results
        return ans;
    }
}
