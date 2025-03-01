//{ Driver Code Starts
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t;
        t = Integer.parseInt(br.readLine());
        while(t-- > 0){
            
            int n;
            n = Integer.parseInt(br.readLine());
            
            Solution obj = new Solution();
            obj.TimeComplexity(n);
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

class Solution {

    // Function to print the time complexity based on the input value of n
    public static void TimeComplexity(int n) {

        // If n is 1, the time complexity is logn
        if(n == 1)
            System.out.println("logn");

        // If n is 2, the time complexity is nlogn
        else if(n == 2)
            System.out.println("nlogn");

        // If n is 3 or 4, the time complexity is n^2
        else if(n == 3 || n == 4)
            System.out.println("n^2");

        // If none of the above conditions are met, print an empty line
        else
            System.out.println();
    }
}

        
