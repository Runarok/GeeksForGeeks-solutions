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
        int t = Integer.parseInt(br.readLine().trim());
        while(t-->0)
        {
            String s = br.readLine().trim();
            Solution ob = new Solution();
            List<String> res  = ob.all_palindromes(s);
            System.out.print("{ ");
            for(int i = 0; i < res.size(); i++)
            {
                System.out.print(res.get(i) + " ");
            }   
            System.out.println("}");                     
        }
	}
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    private List<String> palindromePermutations;

    public List<String> all_palindromes(String str) {
        palindromePermutations = new ArrayList<>();
        Map<Character, Integer> charFrequency = new HashMap<>();

        // Count frequency of each character
        for (char ch : str.toCharArray()) {
            charFrequency.put(ch, charFrequency.getOrDefault(ch, 0) + 1);
        }

        boolean hasOddFrequencyChar = false;
        String middleChar = "";

        // Identify if more than one character has an odd frequency
        for (char ch : charFrequency.keySet()) {
            int frequency = charFrequency.get(ch);
            if (frequency % 2 != 0) {
                if (hasOddFrequencyChar) {
                    return palindromePermutations; // If more than one odd-frequency character, palindrome is impossible
                }
                hasOddFrequencyChar = true;
                middleChar = Character.toString(ch); // Store the middle character
            }
        }

        // Construct half of the palindrome string
        StringBuilder halfString = new StringBuilder();
        for (char ch : charFrequency.keySet()) {
            int frequency = charFrequency.get(ch);
            for (int i = 0; i < frequency / 2; i++) {
                halfString.append(ch);
            }
        }

        // Generate all unique permutations of the half-string
        generatePalindromePermutations(halfString.toString(), new boolean[halfString.length()], new StringBuilder(), middleChar);
        
        // Sort results lexicographically
        Collections.sort(palindromePermutations);
        return palindromePermutations;
    }

    private void generatePalindromePermutations(String halfStr, boolean[] used, StringBuilder currentPermutation, String middle) {
        // Base case: if the permutation is complete, construct the full palindrome
        if (currentPermutation.length() == halfStr.length()) {
            palindromePermutations.add(currentPermutation.toString() + middle + currentPermutation.reverse().toString());
            currentPermutation.reverse(); // Restore original order after reversal
            return;
        }

        Set<Character> seenCharacters = new HashSet<>();

        for (int i = 0; i < halfStr.length(); i++) {
            if (seenCharacters.contains(halfStr.charAt(i))) {
                continue; // Skip duplicates to ensure unique permutations
            }

            if (!used[i]) {
                seenCharacters.add(halfStr.charAt(i));
                used[i] = true;
                currentPermutation.append(halfStr.charAt(i));

                // Recursively generate further permutations
                generatePalindromePermutations(halfStr, used, currentPermutation, middle);

                // Backtrack: remove the last character and mark it as unused
                currentPermutation.setLength(currentPermutation.length() - 1);
                used[i] = false;
            }
        }
    }
}
