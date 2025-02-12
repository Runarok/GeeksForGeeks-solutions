//{ Driver Code Starts
//Initial Template for Java
import java.util.*;
import java.io.*;

public class code1 
{
    public static void main(String args[])throws IOException
    {
        BufferedReader in=new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out=new PrintWriter(System.out);
        int t=Integer.parseInt(in.readLine());
        while(t-->0){
            String s1[]=in.readLine().trim().split(" ");
            String s2[]=in.readLine().trim().split(" ");

            Solution ob=new Solution();
            int ans=ob.prefixSuffixString(s1,s2);
            out.println(ans);

        
out.println("~");
}
        out.close();
    }
}
// } Driver Code Ends

// User function Template for Java
class Solution
{
    // Node class for Trie structure
    class Node {
        Node curr;
        Node[] links = new Node[26]; // Array of 26 for each alphabet character
        
        Node(){}
    }
    
    // Prefix and Suffix Tries
    Node prefix = new Node();
    Node suffix = new Node();
    
    // Function to insert a word into the Trie
    void insert(Node root, String word) {
        Node temp = root;
        for(int i = 0; i < word.length(); i++) {
            char ch = word.charAt(i);
            Node child = temp.links[ch - 'a']; // Access the node corresponding to the character
            if (child == null) child = new Node(); // If node doesn't exist, create a new one
            temp.links[ch - 'a'] = child; // Link the new node to the Trie
            temp = child; // Move to the next node
        }
    }

    // Function to find if a word exists in the Trie
    boolean finder(Node root, String word) {
        Node temp = root;
        for(int i = 0; i < word.length(); i++) {
            char ch = word.charAt(i);
            Node child = temp.links[ch - 'a']; // Access the node for the character
            if (child == null) return false; // If character node doesn't exist, return false
            temp = child; // Move to the next node
        }
        return true; // Return true if word is found
    }
    
    // Function to count prefix or suffix matches between two arrays of strings
    public int prefixSuffixString(String s1[], String s2[]) {
        int response = 0; // Initialize the counter for matches
        
        // Insert all words in s1 and their reversed counterparts into the Trie
        for(String val : s1) {
            String rev = new StringBuilder().append(val).reverse().toString(); // Reverse the string
            insert(prefix, val); // Insert the word in prefix Trie
            insert(suffix, rev); // Insert the reversed word in suffix Trie
        }

        // Check if any string in s2 matches a prefix or suffix of any string in s1
        for(String val : s2) {
            if(finder(prefix, val)) response += 1; // Check for prefix match
            else{
                String rev = new StringBuilder().append(val).reverse().toString(); // Reverse the word
                if(finder(suffix, rev)) response += 1; // Check for suffix match
            }
        }
        
        return response; // Return the number of matches
    }
}
