//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;
class GFG{
    public static void main(String args[])throws IOException{
        Scanner sc = new Scanner(System.in);
        int t = Integer.parseInt(sc.nextLine());

        while(t > 0){
            String S = sc.nextLine();
            Solution ob = new Solution();
            ArrayList<Integer> ans = ob.countChars(S);
            for (Integer val: ans) 
                System.out.print(val+" "); 
            System.out.println();
            t--;
        }
    }
}

// } Driver Code Ends

class Solution{
    // Function to count the number of characters in each word of the string
    ArrayList<Integer> countChars (String s)
    {
        // Initialize an ArrayList to store the length of each word
        ArrayList<Integer> result = new ArrayList<>();
        
        // Split the string by spaces to separate words
        String[] words = s.split("\\s+");

        // Iterate over each word in the string
        for (int i = 0; i < words.length; i++) 
        {
            // Get the current word
            String word = words[i];

            // Add the length of the word to the result list
            result.add(word.length());
        }

        // Return the list containing the length of each word
        return result;
    }
}
