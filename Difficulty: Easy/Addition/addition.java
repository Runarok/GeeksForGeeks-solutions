//{ Driver Code Starts
//Initial Template for Java

import java.io.*;

// } Driver Code Ends


// Create a class Addition
// with a static function add
// This should return the sum of two values (a, b) passed in the parameters

class Addition {
    // Static function to return the sum of two integers a and b
    public static int add(int a, int b) {
        return a + b;
    }
}



//{ Driver Code Starts.


class GFG{
    public static void main(String args[]) throws IOException{
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0){
            String input[] = read.readLine().split(" ");
            int a = Integer.parseInt(input[0]);
            int b = Integer.parseInt(input[1]);
            System.out.println(Addition.add(a,b));
        }
    }
}
// } Driver Code Ends