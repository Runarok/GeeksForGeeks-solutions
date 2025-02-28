//{ Driver Code Starts
import java.io.*;
import java.util.*; 

class GFG{
    public static void main(String args[]) throws IOException { 
        Scanner sc = new Scanner(System.in);
        int t = Integer.parseInt(sc.nextLine());

        while(t-- > 0){
            String S = sc.nextLine();
            Solution ob = new Solution();
            System.out.println(ob.isDivisibleBy5(S)); 
        
System.out.println("~");
}
    } 
} 



// } Driver Code Ends


class Solution {
    static String isDivisibleBy5(String bin) {
        int remainder = 0;  // Variable to store the remainder when divided by 5

        // Traverse through each character of the binary string
        for (char bit : bin.toCharArray()) {
            // Left shift the remainder by multiplying by 2, then add the current bit (either 0 or 1)
            remainder = (remainder * 2 + (bit - '0')) % 5;
        }

        // If the remainder is 0, it means the binary number is divisible by 5
        return remainder == 0 ? "Yes" : "No";
    }
}
