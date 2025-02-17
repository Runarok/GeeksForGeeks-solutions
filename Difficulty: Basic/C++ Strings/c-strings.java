//{ Driver Code Starts
import java.io.*;
import java.util.*;

class GfG
{
    public static void main(String args[])
        {
            Scanner sc = new Scanner(System.in);
            int t = sc.nextInt();
            while(t-->0)
                {
                    String S1 = sc.next();
                    String S2 = sc.next();
                    Sol obj = new Sol();
                    System.out.println(obj.conCat(S1,S2));
                }
                
        }
}

// } Driver Code Ends

// User function Template for Java

class Sol {
   /**
    * Function to concatenate two strings.
    * @param s1 - The first string.
    * @param s2 - The second string.
    * @returns String - The concatenated result of s1 and s2.
    */
   String conCat(String s1, String s2) {
      // Concatenate s1 and s2
      String s3 = s1 + s2;
      return s3;
   }
}
