//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
class GFG{
    
    
// } Driver Code Ends

// User function Template for Java

// Function to print the two modified strings
// - First string: The first character is changed to uppercase, the rest to lowercase
// - Second string: The entire string is changed to uppercase
// Both strings are printed on new lines.

public static void changeCase(String s) {
    // Convert the first character to uppercase and the rest to lowercase
    System.out.println(s.substring(0, 1).toUpperCase() + s.substring(1).toLowerCase());

    // Convert the entire string to uppercase
    System.out.println(s.toUpperCase());
}


//{ Driver Code Starts.
    
    
    public static void main(String args[])throws IOException{
        BufferedReader read = new BufferedReader( new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while( t-- > 0){
            
            String s = read.readLine().trim();
            
            changeCase(s);
        
System.out.println("~");
}
    }
}
// } Driver Code Ends