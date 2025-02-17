//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
class GFG{
    
    
// } Driver Code Ends

// User function Template for Java

// Function to find the starting index of the substring 'pattern' in the string 'text'.
// Returns the starting index if found, otherwise returns -1.
public static int findPattern(String text, String pattern) {
    // Using indexOf() method to find the first occurrence of 'pattern' in 'text'
    int startingIndex = text.indexOf(pattern);

    // Returning the found index or -1 if the pattern is not present
    return startingIndex;
}


//{ Driver Code Starts.
    
    
    public static void main(String args[])throws IOException{
        BufferedReader read = new BufferedReader( new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while( t-- > 0){
            
            String s = read.readLine().trim();
            String p = read.readLine().trim();
            
            int index = findPattern(s, p);
            System.out.println(index);
        
System.out.println("~");
}
    }
}
// } Driver Code Ends