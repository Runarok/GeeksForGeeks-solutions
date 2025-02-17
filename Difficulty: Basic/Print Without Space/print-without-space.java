//{ Driver Code Starts
// Initial Template for Java

import java.util.Scanner;

class Main {
    static Scanner scn = new Scanner(System.in);

    
// } Driver Code Ends

public static void utility() {
    // Reading two input strings
    String a = scn.nextLine();
    String b = scn.nextLine();
    
    // Concatenating and printing both strings without any space
    System.out.println(a + "" + b);
}


//{ Driver Code Starts.

    public static void main(String[] args) {
        int t = scn.nextInt();
        scn.nextLine();
        while (t-- > 0) {
            utility();

            System.out.println("~");
        }
        scn.close();
    }
}
// } Driver Code Ends