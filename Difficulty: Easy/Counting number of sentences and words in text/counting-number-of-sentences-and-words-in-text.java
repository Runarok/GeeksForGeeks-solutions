//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0){
            String text = in.readLine();
            
            Solution ob = new Solution();
            List<Integer> ans = new ArrayList<Integer>();
            ans = ob.sentenceWord(text);
            System.out.println(ans.get(0)+" "+ans.get(1));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static List<Integer> sentenceWord(String text) {
        // List to store the result: [number of sentences, number of words]
        List<Integer> result = new ArrayList<>();
        
        // Split the text into words based on spaces
        String[] words = text.split(" ");
        
        int sentenceCount = 0;  // To count sentences
        int wordCount = 0;      // To count words
        
        // Loop through each word
        for (int i = 0; i < words.length; i++) {
            wordCount++; // Every word contributes to word count
            
            // If the word ends with a sentence-ending punctuation, count it as sentence
            if (words[i].endsWith(".") || words[i].endsWith("?") || words[i].endsWith("!")) {
                sentenceCount++;
            }
        }
        
        // Check if the last word ends with a punctuation; if so, the count is already correct
        // Otherwise, we consider the entire text as part of one final sentence
        if (!(words[words.length - 1].endsWith(".") || words[words.length - 1].endsWith("?") || words[words.length - 1].endsWith("!"))) {
            sentenceCount++; // Add the last sentence if it didn’t end properly
        }
        
        // Add both counts to the result list
        result.add(sentenceCount);
        result.add(wordCount);
        
        return result;
    }
}
