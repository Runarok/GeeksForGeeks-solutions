//{ Driver Code Starts
//Initial Template for Java

import java.util.Scanner;

class Main {

    
// } Driver Code Ends

//User function Template for Java

public static int find_greatest_number(int a, int b, int c) {
    // Write your code here..
    // Return the greatest of the three numbers using Math.max() function
    return Math.max(a, Math.max(b, c));
}


//{ Driver Code Starts.

    public static void main(String[] args)
    {
        Scanner scn = new Scanner(System.in);
        int t = scn.nextInt();
        while(t-- > 0) {
            int a = scn.nextInt();
            int b = scn.nextInt();
            int c = scn.nextInt();
            int greatest_number = find_greatest_number(a,b,c);
            System.out.println(greatest_number);
        
System.out.println("~");
}
        scn.close();
    }
}
// } Driver Code Ends