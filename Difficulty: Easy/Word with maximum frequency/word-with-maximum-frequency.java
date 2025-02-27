//{ Driver Code Starts
// Initial Template for Java

/*package whatever //do not write package name here */

import java.util.*;


// } Driver Code Ends

class Solution {
    public String maximumFrequency(String s) {
        // Split the input string into words based on spaces
        String[] words = s.split(" ");
        
        // Use LinkedHashMap to maintain insertion order (first occurrence priority)
        Map<String, Integer> frequencyMap = new LinkedHashMap<>();
        
        // Count frequency of each word
        for (String word : words) {
            frequencyMap.put(word, frequencyMap.getOrDefault(word, 0) + 1);
        }
        
        // To track the word with the highest frequency
        String maxFrequencyWord = "";
        int maxFrequency = 0;
        
        // Iterate over the original word order to ensure first occurrence wins in case of tie
        for (String word : words) {
            int currentFrequency = frequencyMap.get(word);
            if (currentFrequency > maxFrequency) {
                maxFrequency = currentFrequency;
                maxFrequencyWord = word;
            }
        }
        
        // Return the word with maximum frequency followed by its count
        return maxFrequencyWord + " " + maxFrequency;
    }
}

//{ Driver Code Starts.

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        sc.nextLine(); // Consume the newline character after the integer input

        for (int i = 0; i < t; i++) {
            String str = sc.nextLine();
            Solution sol = new Solution();
            System.out.println(sol.maximumFrequency(str));
            System.out.println("~");
        }

        sc.close();
    }
}

// } Driver Code Ends