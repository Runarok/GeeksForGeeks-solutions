#User function Template for python3

import re

class Solution:
    def SortedString(self, s: str) -> str:
        # Extract and sort vowels
        vowels = ''.join(sorted(re.findall('[aeiou]', s)))
        
        # Extract and sort consonants (anything that is not a vowel)
        consonants = ''.join(sorted(re.findall('[^aeiou]', s)))
        
        # Lengths of both vowel and consonant strings
        vowel_len = len(vowels)
        consonant_len = len(consonants)

        # Resultant string to build
        result = ''
        
        # Find the minimum length to interleave characters
        min_len = min(vowel_len, consonant_len)

        # Check the first character type in the original string
        # If the string starts with a consonant, swap vowels and consonants
        if s[0] not in ['a', 'e', 'i', 'o', 'u']:
            vowels, consonants = consonants, vowels
            vowel_len, consonant_len = consonant_len, vowel_len

        # Interleave the vowels and consonants
        for vowel, consonant in zip(vowels, consonants):
            result += vowel + consonant

        # Append any remaining characters if one group is longer
        if vowel_len > consonant_len:
            result += vowels[min_len:]
        elif vowel_len < consonant_len:
            result += consonants[min_len:]

        # Return the final sorted and interleaved string
        return result


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	t=int(input())
	for i in range(t):
		s=input()
		ob = Solution()
		ans = ob.SortedString(s)
		print(ans)
# } Driver Code Ends