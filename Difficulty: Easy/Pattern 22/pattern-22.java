//{ Driver Code Starts
import java.io.*;
import java.util.*;

class Main {
    // Driver code
    public static void main(String[] args) throws Exception {
        BufferedReader br =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine().trim());
        while (t-- > 0) {
            int n = Integer.parseInt(br.readLine().trim());
            Solution obj = new Solution();
            obj.printSquare(n);
        
System.out.println("~");
}
    }
}
// } Driver Code Ends


class Solution {

    void printSquare(int n) {
        int totalSize = (n * 2) - 1; // Total size of the square matrix

        // Upper half including the middle row
        for (int i = 0; i <= totalSize / 2; i++) {
            // Left decreasing numbers
            for (int j = 0; j <= i - 1; j++) {
                System.out.print((n - j) + " ");
            }

            // Middle constant numbers
            for (int j = i; j < totalSize - i; j++) {
                System.out.print((n - i) + " ");
            }

            // Right increasing numbers
            for (int j = n - i + 1; j <= n; j++) {
                System.out.print(j + " ");
            }

            System.out.println();
        }

        int halfSize = totalSize / 2;

        // Lower half
        for (int i = 0; i < halfSize; i++) {
            // Left decreasing numbers
            for (int j = n; j >= 3 + i; j--) {
                System.out.print(j + " ");
            }

            // Middle constant numbers
            for (int j = 0; j < 3 + (2 * i); j++) {
                System.out.print((i + 2) + " ");
            }

            // Right increasing numbers
            for (int j = halfSize - 2 - i; j >= 0; j--) {
                System.out.print((n - j) + " ");
            }

            System.out.println();
        }
    }
}
