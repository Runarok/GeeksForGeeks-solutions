//{ Driver Code Starts
// Initial Template for Java

import java.util.Scanner;

class Main {
    static Scanner scn = new Scanner(System.in);

    
// } Driver Code Ends

// User function Template for Java

public static void utility() {
    // Read input strings a and b
    String a = scn.nextLine();
    String b = scn.nextLine();

    // Print the two strings separated by a space
    System.out.println(a + " " + b);
}


//{ Driver Code Starts.

    public static void main(String[] args) {
        int t = scn.nextInt();
        scn.nextLine();
        while (t-- > 0) {
            utility();

            System.out.println("~");
        }
    }
}

// } Driver Code Ends