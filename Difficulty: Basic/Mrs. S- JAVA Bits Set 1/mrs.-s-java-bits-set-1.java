//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.io.*;
class Bits{
    public static void main(String[] arsg)throws IOException{
        BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
        int t=Integer.parseInt(br.readLine());
        while(t-->0){
            long n=Long.parseLong(br.readLine());
            GfG g=new GfG();
            g.count(n);
        
System.out.println("~");
}
    }
}


// } Driver Code Ends
//User function Template for Java
class GfG {
    public void count(long n) {
        // Convert the number to binary representation and count the set-bits and non set-bits.
        String binaryRepresentation = Long.toBinaryString(n);
        
        // Count set-bits (1s) and non set-bits (0s)
        int setBits = 0, nonSetBits = 0;
        
        // Loop through each character of the binary representation
        for (int i = 0; i < binaryRepresentation.length(); i++) {
            if (binaryRepresentation.charAt(i) == '1') {
                setBits++;
            } else {
                nonSetBits++;
            }
        }
        
        // Print the results
        System.out.println(setBits + " " + nonSetBits);
    }
}


//{ Driver Code Starts.

// } Driver Code Ends