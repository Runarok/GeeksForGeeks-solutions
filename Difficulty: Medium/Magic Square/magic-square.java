//{ Driver Code Starts
// Initial Template for Java
import java.util.*;


// } Driver Code Ends
// User function Template for Java

class Solution {
    public static String magicSquare(int mat[][]) {
        int n = mat.length;
        
        // Check if all elements are distinct and within the range 1 to n^2
        boolean[] seen = new boolean[n * n + 1];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                int value = mat[i][j];
                if (value < 1 || value > n * n || seen[value]) {
                    return "Not a Magic Square";  // Duplicate or out of range value
                }
                seen[value] = true;
            }
        }
        
        // Calculate target sum by summing the first row
        int targetSum = 0;
        for (int j = 0; j < n; j++) {
            targetSum += mat[0][j];
        }

        // Check each row sum
        for (int i = 0; i < n; i++) {
            int rowSum = 0;
            for (int j = 0; j < n; j++) {
                rowSum += mat[i][j];
            }
            if (rowSum != targetSum) {
                return "Not a Magic Square";  // Row sum mismatch
            }
        }

        // Check each column sum
        for (int j = 0; j < n; j++) {
            int colSum = 0;
            for (int i = 0; i < n; i++) {
                colSum += mat[i][j];
            }
            if (colSum != targetSum) {
                return "Not a Magic Square";  // Column sum mismatch
            }
        }

        // Check both diagonals
        int diag1Sum = 0, diag2Sum = 0;
        for (int i = 0; i < n; i++) {
            diag1Sum += mat[i][i];         // Primary diagonal
            diag2Sum += mat[i][n - i - 1]; // Secondary diagonal
        }
        if (diag1Sum != targetSum || diag2Sum != targetSum) {
            return "Not a Magic Square";  // Diagonal sum mismatch
        }

        // If all checks pass, it's a magic square
        return "Magic Square";
    }
}

//{ Driver Code Starts.

public class Main {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int tc = sc.nextInt();
        while (tc-- > 0) {
            int n = sc.nextInt();
            int mat[][] = new int[n][n];
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) mat[i][j] = sc.nextInt();
            }
            Solution sln = new Solution();
            String s = sln.magicSquare(mat);
            System.out.println(s);
        }
    }
}
// } Driver Code Ends