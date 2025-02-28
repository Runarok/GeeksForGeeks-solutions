//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*; 
class GFG{
    public static void main(String args[]) throws IOException { 
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        
        while(t-- > 0){
            int n = Integer.parseInt(read.readLine());
            
            String input_line[] = read.readLine().trim().split("\\s+");
            long a[]= new long[n];
            for(int i = 0; i < n; i++)
                a[i] = Long.parseLong(input_line[i]);

            Solution ob = new Solution();
            ob.prank(a, n); 

            for (int i=0;i<n;i++) 
                System.out.print(a[i]+" "); 
            System.out.println();
        
System.out.println("~");
}
    } 
} 
// } Driver Code Ends

// User function Template for Java
class Solution { 
    
    // Function to perform the "prank" on the array
    void prank(long[] a, int n) { 
        
        // Storing the size of the array as a long type for future calculations
        long N = n;
        
        // Perform the prank by modifying the elements in the array
        for (int i = 0; i < n; i++) {
            // Adding the remainder of a[i] divided by N, multiplied by N, to a[i]
            // This encodes both the original value and the new value in a single element
            a[i] = a[i] + (a[(int) a[i]] % N) * N;
        }

        // After encoding, divide each element by N to retrieve the original values
        for (int i = 0; i < n; i++) {
            // Divide by N to get the final modified values
            a[i] = a[i] / N;
        }
    }
}
