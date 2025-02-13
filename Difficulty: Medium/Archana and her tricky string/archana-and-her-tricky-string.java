//{ Driver Code Starts
import java.io.*;
import java.util.*;
class GFG
{
    public static void main(String args[])throws IOException
    {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0)
        {
            String s = read.readLine();
            
            Solution ob = new Solution();
            System.out.println(ob.findString(s));
        }
    }
}
// } Driver Code Ends


class Solution {
    static String findString(String s) {
        String longestSequence = "";
        int minDifference = 0;

        // Using TreeMap to store characters in descending order
        Map<Character, Boolean> charPresenceMap = new TreeMap<>((char1, char2) -> Character.compare(char2, char1));

        // Populate the map with unique characters from the string
        for (int i = 0; i < s.length(); i++) {
            charPresenceMap.put(s.charAt(i), true);
        }

        int maxLength = Integer.MIN_VALUE;

        // Iterate through each unique character in descending order
        for (Map.Entry<Character, Boolean> entry : charPresenceMap.entrySet()) {
            char currentChar = entry.getKey();

            // Try different step sizes (1 to 12)
            for (int step = 1; step <= 12; step++) {
                char tempChar = currentChar;
                int sequenceLength = 0;
                StringBuilder sequenceBuilder = new StringBuilder();
                int currentDifference = 0;

                // Construct a sequence by stepping down in character values
                while (charPresenceMap.containsKey(tempChar) && charPresenceMap.get(tempChar)) {
                    sequenceLength++;
                    sequenceBuilder.append(tempChar);
                    tempChar = (char) (tempChar - step);
                    currentDifference = step;
                }

                // Update the longest sequence if a better one is found
                if ((maxLength < sequenceLength) || (maxLength == sequenceLength && currentDifference < minDifference)) {
                    maxLength = sequenceLength;
                    longestSequence = sequenceBuilder.toString();
                    minDifference = currentDifference;
                }
            }
        }

        return longestSequence;
    }
}
