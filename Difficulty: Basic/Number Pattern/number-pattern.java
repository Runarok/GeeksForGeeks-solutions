//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while(t-- > 0)
        {
            int N=sc.nextInt();
            Solution ob = new Solution();
            ArrayList<String> res = ob.numberPattern(N);
            for (int i = 0; i < res.size(); i++){
			    System.out.print(res.get(i)+" ");
            }
			System.out.println();
        }  
    }
}

// } Driver Code Ends

class Solution{
    ArrayList<String> numberPattern(int N){
        // Initialize the result list to store the pattern.
        ArrayList<String> Lis = new ArrayList<>();
        
        // Create a 2D array to store the pattern, though it isn't being used directly here.
        int[][] a = new int[N][N];
        
        // Loop over each row
        for (int i = 0; i < N; i++) {
            StringBuilder S = new StringBuilder();
            
            // Append increasing numbers
            for (int j = 1; j <= i + 1; j++) {
                S.append(j);
            }

            // Append decreasing numbers
            for (int j = i; j >= 1; j--) {
                S.append(j);
            }
            
            // Add the generated string to the result list
            Lis.add(S.toString());
        }

        // Return the result list containing the pattern.
        return Lis;
    }
}
