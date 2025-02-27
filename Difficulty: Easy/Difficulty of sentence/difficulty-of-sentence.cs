//{ Driver Code Starts
//Initial Template for C#


using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DriverCode
{

    class GFG
    {
        static void Main(string[] args)
        {
            int testcases;// Taking testcase as input
            testcases = Convert.ToInt32(Console.ReadLine());
            while (testcases-- > 0)// Looping through all testcases
            {
                
                string str = Console.ReadLine().Trim();

                Solution obj = new Solution();
                int res = obj.calcDiff(str);
                
                Console.Write(res+"\n");
          
Console.Write("~"+"\n");
}

        }
    }
    
}
// } Driver Code Ends

//User function Template for C#
class Solution
{
    // Helper function to check if a character is a vowel.
    private bool isVowel(char ch) {
        switch (ch) {
            case 'a': case 'A':
            case 'e': case 'E':
            case 'i': case 'I':
            case 'o': case 'O':
            case 'u': case 'U':
                return true;
            default: 
                return false;
        }
    }

    // Function to calculate the difficulty score based on the given string.
    public int calcDiff(string str)
    {
        // Variables to count vowels and consonants in each word.
        int consonantCount = 0;
        int consecutiveConsonants = 0;
        int maxConsecutiveConsonants = 0;
        int vowelCount = 0;

        // Final counts for hard and easy words.
        int hardWordCount = 0;
        int easyWordCount = 0;

        // Iterate over each character in the string.
        for (int i = 0; i < str.Length; i++) {
            // When a space is found, process the current word.
            if (str[i] == ' ') {
                if (maxConsecutiveConsonants >= 4 || consonantCount > vowelCount) {
                    hardWordCount++;
                } else {
                    easyWordCount++;
                }

                // Reset counters for the next word.
                vowelCount = 0;
                consonantCount = 0;
                consecutiveConsonants = 0;
                maxConsecutiveConsonants = 0;
            }
            // If it's a vowel, update vowel count and reset consecutive consonants.
            else if (isVowel(str[i])) {
                vowelCount++;
                consecutiveConsonants = 0;
            }
            // If it's a consonant, update consonant counts.
            else {
                consonantCount++;
                consecutiveConsonants++;
                maxConsecutiveConsonants = Math.Max(consecutiveConsonants, maxConsecutiveConsonants);
            }
        }

        // Process the last word since there's no trailing space.
        if (maxConsecutiveConsonants >= 4 || consonantCount > vowelCount) {
            hardWordCount++;
        } else {
            easyWordCount++;
        }

        // Calculate the final difficulty score.
        return 5 * hardWordCount + 3 * easyWordCount;
    }
}
