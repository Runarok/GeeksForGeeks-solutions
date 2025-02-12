//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*; 
class GFG{
    public static void main(String args[]) throws IOException { 
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0){
            String n = read.readLine().trim();
            Solution ob = new Solution();
            long ans = ob.findpos(n);
            System.out.println(ans);
        
System.out.println("~");
}
    } 
} 
// } Driver Code Ends

//User function Template for Java
class Solution 
{ 
    // Function to find the position of a given string in a binary-like number system
    long findpos(String n) 
    { 
        long r = 0;  // Variable to store the resulting position
        long n1 = n.length();  // Length of the input string
        
        // Loop through each character in the string
        for (int i = 0; i < n1; i++) {
            // If the character is '4', we adjust the position based on the binary-like system
            if (n.charAt(i) == '4') {
                // Add the value corresponding to '4' in binary-like position
                r = r + (long) Math.pow(2, n1 - i - 1);
            }
            else {
                // If the character is '7', adjust the position accordingly
                r = r + (long) Math.pow(2, n1 - i);
            }
        }
        
        // Return the final calculated position
        return r;
    }
}
