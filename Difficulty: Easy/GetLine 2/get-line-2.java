//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    static Scanner sc = new Scanner(System.in);

    
// } Driver Code Ends

// User function Template for Java

static void getLine() {
    String a;
    a = sc.nextLine();
    
    int count = 0;
    // Loop through the string until '@' is encountered
    for(int i = 0; i < a.length(); i++) {
        if(a.charAt(i) == '@') {
            break;
        }
        count++;
    }

    // Extract substring before '@' and print it
    a = a.substring(0, count);
    System.out.println(a);
}



//{ Driver Code Starts.

    public static void main(String[] args) {

        int t = sc.nextInt();
        sc.nextLine();
        while (t-- > 0) {
            getLine();
        
System.out.println("~");
}
    }
}
// } Driver Code Ends