//{ Driver Code Starts
//Initial Template for Java

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
                    String S = sc.next();
                    Solution obj = new Solution();
                    System.out.println(obj.CountSpecialPalindrome(S));
                }
                
        }
}
// } Driver Code Ends

class Solution
{
    public long CountSpecialPalindrome(String S)
    {
        // Create lists to store characters and their consecutive counts
        ArrayList<Character> letters = new ArrayList<>();
        ArrayList<Integer> cnt = new ArrayList<>();
        
        // Iterate through the string to count consecutive characters
        for(int i = 0; i < S.length(); ){
            int j = i;
            
            // Count consecutive occurrences of the same character
            while(i < S.length() && S.charAt(j) == S.charAt(i))
                i++;
            
            // Add the character and its count to the respective lists
            letters.add(S.charAt(j));
            cnt.add(i - j);
        }
        
        // Variable to store the final result
        long res = 0;
        
        // Process each group of consecutive characters
        for(int i = 0; i < letters.size(); i++){
            // If there are more than one consecutive characters, calculate the possible palindromes
            if(cnt.get(i) > 1){
                long sub = cnt.get(i) - 1;
                res += ((sub * (sub + 1)) / 2);
            }
            else{
                // Check for special palindromes (e.g., "aba")
                if(i > 0 && i < letters.size() - 1 && letters.get(i - 1) == letters.get(i + 1)){
                    res += Math.min(cnt.get(i - 1), cnt.get(i + 1));
                }
            }
        }
        
        // Return the total count of special palindromes
        return res;
    }
}
