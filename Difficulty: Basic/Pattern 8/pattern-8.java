//{ Driver Code Starts
import java.io.*;
import java.util.*;

class Main {
    // Driver code
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine().trim());
        while (t-- > 0) {
            int n = Integer.parseInt(br.readLine().trim());
            Solution obj=new Solution();
            obj.printTriangle(n);
        
System.out.println("~");
}
    }
}
// } Driver Code Ends


class Solution {

    void printTriangle(int n) {
        for (int row = 0; row < n; row++) {  
            // Print leading spaces
            for (int space = 0; space < row; space++) {
                System.out.print(" ");
            }
            // Print stars
            for (int star = 0; star < 2 * (n - row) - 1; star++) {
                System.out.print("*");
            }
            // Move to the next line
            System.out.println();
        }
    }
}
