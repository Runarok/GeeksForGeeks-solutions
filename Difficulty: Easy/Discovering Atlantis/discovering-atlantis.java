//{ Driver Code Starts
// Intitial Template for Java

import java.io.*;
import java.util.*;

class GFG{
    public static void main(String args[])throws IOException{
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0)
        {
            int N = Integer.parseInt(in.readLine());
            
            Solution ob = new Solution();
            System.out.println(ob.captain(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution{
    // Function to determine the captain based on the number N
    static String captain(int N){
        // If N is divisible by 3, return "JACK", else return "JELLY"
        return N % 3 != 0 ? "JELLY" : "JACK";
    }
}
