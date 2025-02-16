//{ Driver Code Starts
// Initial Template for Java

import java.util.Scanner;

class Main {

    
// } Driver Code Ends

// User function Template for Java

public static void operators(int a, int b, int c) {
    // Performing bitwise XOR of 'a' with itself, result will always be 0
    int d = a ^ a;
    
    // Performing bitwise XOR of 'c' and 'b'
    int e = c ^ b;
    
    // Performing bitwise AND of 'a' and 'b'
    int f = a & b;
    
    // Performing bitwise OR of 'c' with (a^a), which is equivalent to just 'c'
    int g = c | (a ^ a);
    
    // Taking bitwise NOT of 'e'
    e = ~e;

    // Printing the results
    System.out.println(d + " " + e + " " + f + " " + g);
}


//{ Driver Code Starts.

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int t = scn.nextInt();
        while (t-- > 0) {
            int a = scn.nextInt();
            int b = scn.nextInt();
            int c = scn.nextInt();
            operators(a, b, c);

            System.out.println("~");
        }
        scn.close();
    }
}
// } Driver Code Ends