//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
    public static void main(String[] args) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while(T-->0)
        {
            String type = br.readLine().trim();
            float R = Float.parseFloat(br.readLine().trim());
            Solution ob = new Solution();
            int ans = ob.findFocalLength(R, type);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution
{
    // Function to calculate the focal length based on the type of lens (concave or convex)
    public int findFocalLength(float R, String type)
    {
        // If the lens is concave, the focal length is positive (R/2)
        if(type.equals("concave")){
            return (int) Math.floor(R / 2);
        }
        // If the lens is convex, the focal length is negative (-R/2)
        return (int) Math.floor(-R / 2);
    }

    // Main function to test the findFocalLength method
    public static void main(String[] args){
        // Create an instance of Solution
        Solution sol = new Solution();
        // Call the findFocalLength method with a concave lens
        sol.findFocalLength(5.4f, "concave");
    }
}
