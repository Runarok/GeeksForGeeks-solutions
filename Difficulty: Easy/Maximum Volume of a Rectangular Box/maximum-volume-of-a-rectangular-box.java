//{ Driver Code Starts


import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String S[] = read.readLine().split(" ");
            
            int A = Integer.parseInt(S[0]);
            int B = Integer.parseInt(S[1]);

            Solution ob = new Solution();
            System.out.println(ob.getVol(A,B));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends


class Solution {
    static long getVol(int perimeter, int area) {
        // Calculate the length of the side of the square-like structure
        double length = (perimeter - Math.sqrt(perimeter * perimeter - 24 * area)) / 12;

        // Calculate the volume using the derived length and given area and perimeter
        double volume = length * (area / 2.0 - length * (perimeter / 4.0 - length));

        // Return the volume as a long (rounded)
        return (long) volume;
    }
}
