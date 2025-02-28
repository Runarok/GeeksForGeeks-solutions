//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
class GFG{
    
    
// } Driver Code Ends

// User function Template for Java

// Function should print the alphabets
// from c1 to c2 (space separated)
// No need to print the new line
// The new line will be printed by the
// driver's code.

public static void alphabets(char c1, char c2){
    // Iterate through the characters from c1 to c2
    for(char i = c1; i <= c2; i++){
        // Print each character followed by a space
        System.out.print(i + " ");
    }
}



//{ Driver Code Starts.
    
    
    public static void main(String args[])throws IOException{
        BufferedReader read = new BufferedReader( new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while( t-- > 0){
            
            char c1 = read.readLine().trim().charAt(0);
            char c2 = read.readLine().trim().charAt(0);
            
            alphabets(c1, c2);
            System.out.println();
        
System.out.println("~");
}
    }
}
// } Driver Code Ends