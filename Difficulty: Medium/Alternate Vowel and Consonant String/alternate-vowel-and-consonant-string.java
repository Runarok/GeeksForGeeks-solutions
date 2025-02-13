//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            int N = Integer.parseInt(read.readLine());
            String S = read.readLine().trim();
            
            Solution ob = new Solution();
            String ans = ob.rearrange(S, N);
            
            System.out.println(ans);
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

//User function Template for Java

class Solution{
    public String rearrange(String S, int N){
        
        // Two TreeMaps to store frequency of vowels and consonants
        TreeMap<Character, Integer> vowelCntMap = new TreeMap<>();
        TreeMap<Character, Integer> consonantCntMap = new TreeMap<>();

        // Convert the string into a character array for easier manipulation
        char[] arr = S.toCharArray();
        
        // Loop through the array and categorize characters as vowels or consonants
        for(int i = 0; i < arr.length; i++) {
            // If the character is a vowel, increase its count in the vowel map
            if(arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u')
                vowelCntMap.put(arr[i], vowelCntMap.getOrDefault(arr[i], 0) + 1);
            // Otherwise, it's a consonant, increase its count in the consonant map
            else
                consonantCntMap.put(arr[i], consonantCntMap.getOrDefault(arr[i], 0) + 1);
        }
        
        // Calculate the total number of vowels and consonants
        int vowel = vowelCntMap.values().stream().reduce(0, Integer::sum);
        int consonant = consonantCntMap.values().stream().reduce(0, Integer::sum);
        
        // Find the difference between the number of vowels and consonants
        int diff = vowel - consonant;
        
        // If the number of vowels and consonants is equal
        if(diff == 0) {
            // Choose the character with the smaller frequency to decide who starts (vowel or consonant)
            char c1 = getLeast(vowelCntMap, false);
            char c2 = getLeast(consonantCntMap, false);
            
            // If the vowel character comes first lexicographically, start with vowels
            if(c1 < c2) 
                fillArr(vowelCntMap, consonantCntMap, arr);
            // Otherwise, start with consonants
            else
                fillArr(consonantCntMap, vowelCntMap, arr);
        }
        // If there is one more consonant than vowels, start with consonants
        else if(diff == -1)
            fillArr(consonantCntMap, vowelCntMap, arr);
        // If there is one more vowel than consonants, start with vowels
        else if(diff == 1)
            fillArr(vowelCntMap, consonantCntMap, arr);
        // If the difference is more than 1, it is impossible to rearrange
        else
            return "-1"; // No valid arrangement possible
        
        // Convert the character array back into a string and return it
        return new String(arr);
    }

    // Helper function to get the least frequent character from the map
    // If clean is true, it removes the character from the map after picking it
    Character getLeast(TreeMap<Character, Integer> treeCntMap, boolean clean) {
        // Get the first (smallest) key in the TreeMap
        Character c = treeCntMap.firstKey();
        
        // If clean is true, reduce the count or remove the character from the map
        if(clean) {
            if(treeCntMap.get(c) <= 1)
                treeCntMap.remove(c);
            else
                treeCntMap.put(c, treeCntMap.get(c) - 1);
        }
        
        return c;  // Return the least frequent character
    }

    // Helper function to fill the character array by alternating between two maps
    void fillArr(TreeMap<Character, Integer> treeCntMap1, TreeMap<Character, Integer> treeCntMap2, char[] arr) {
        int ind = 0;
        
        // Keep filling the array with characters from both maps until both are empty
        while(!treeCntMap1.isEmpty() || !treeCntMap2.isEmpty()) {
            // Get the least frequent character from the first map and add it to the array
            arr[ind++] = getLeast(treeCntMap1, true);
            // If there is still space, get the least frequent character from the second map
            if(ind < arr.length)
                arr[ind++] = getLeast(treeCntMap2, true);
        }
    }
}
