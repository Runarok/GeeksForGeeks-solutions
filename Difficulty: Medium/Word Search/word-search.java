//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.lang.*;
import java.math.*;
import java.io.*;

class GFG {
  public static void main(String[] args) throws IOException {
    Scanner sc = new Scanner(System.in);
    int T = sc.nextInt();
    while (T-- > 0) {
      int n = sc.nextInt();
      int m = sc.nextInt();
      char a[][] = new char[n][m];
      sc.nextLine();
      for(int i=0;i<n;i++){
        for(int j=0;j<m;j++)
         a[i][j]=sc.next().charAt(0);
      }
      String word=sc.next();
      Solution obj = new Solution();
      int ans = obj.wordSearch(a,word) ? 1 : 0;
      System.out.println(ans);
    
System.out.println("~");
}
  }
}

// } Driver Code Ends

class Solution {
  
  /**
   * Function to search for the given word in the matrix.
   * The word can be formed by sequentially moving up, down, left, or right.
   * @param m - 2D matrix of characters.
   * @param w - The word to search for.
   * @returns boolean - Returns true if the word is found, false otherwise.
   */
  public static boolean wordSearch(char m[][], String w) {
    // Iterate over each cell in the matrix
    for (int i = 0; i < m.length; i++) {
      for (int j = 0; j < m[0].length; j++) {
        // Start checking if the word can be formed starting from each cell
        if (check(m, w, i, j, 0)) {
          return true;  // Word found
        }
      }
    }
    return false;  // Word not found
  }

  /**
   * Helper function to recursively search the word in all possible directions.
   * @param m - 2D matrix of characters.
   * @param w - The word to search for.
   * @param i - Current row index.
   * @param j - Current column index.
   * @param k - Current character index in the word.
   * @returns boolean - Returns true if the word can be formed starting from current position.
   */
  static boolean check(char m[][], String w, int i, int j, int k) {
    // If all characters of the word have been matched
    if (k == w.length()) {
      return true;
    }

    // Check if we are out of bounds or the cell is already visited (marked with '#')
    if (i < 0 || j < 0 || i >= m.length || j >= m[0].length || m[i][j] == '#') {
      return false;
    }

    // If the current cell matches the character in the word
    if (m[i][j] == w.charAt(k)) {
      char temp = m[i][j];  // Store the character
      m[i][j] = '#';  // Mark the current cell as visited
      
      // Recursively check in all four directions (up, down, left, right)
      if (check(m, w, i + 1, j, k + 1) || check(m, w, i - 1, j, k + 1) ||
          check(m, w, i, j + 1, k + 1) || check(m, w, i, j - 1, k + 1)) {
        return true;  // Word found
      }

      m[i][j] = temp;  // Backtrack and restore the character
    }

    return false;  // Word not found
  }
}
