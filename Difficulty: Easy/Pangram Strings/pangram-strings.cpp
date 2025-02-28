//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

//User function template for C++

class Solution {
public:	

    // Function to check if the given string is a pangram (contains all letters a-z at least once).
    int isPanagram(string inputString) {
        // Array to track whether each letter (a-z) has been seen.
        vector<bool> letterSeen(26, false);
        
        // Counter to track how many distinct letters have been found.
        int distinctLetterCount = 0;
        
        // Iterate through each character in the string.
        for (char character : inputString) {
            if (isalpha(character)) {  // Check if the character is a letter (ignores digits and symbols).
                character = tolower(character);  // Convert letter to lowercase for uniformity.
                
                // If this letter is seen for the first time, mark it and increase the count.
                if (!letterSeen[character - 'a']) {  
                    letterSeen[character - 'a'] = true;
                    distinctLetterCount++;
                    
                    // If all 26 letters are found, the string is a pangram.
                    if (distinctLetterCount == 26) {
                        return 1;
                    }
                }
            }
        }
        
        // If not all 26 letters are found, return 0 (not a pangram).
        return 0;
    }
};



//{ Driver Code Starts.

int main() 
{
   	

   	ios_base::sync_with_stdio(0);
    cin.tie(NULL);
    cout.tie(NULL);
   
   	int t;
   	string tc;
   	getline(cin, tc);
   	t = stoi(tc);
   	while(t--)
   	{
   		string s;
   		getline(cin, s);

   	    Solution ob;

   		cout << ob.isPanagram(s) << "\n";
   	
cout << "~" << "\n";
}

    return 0;
}
// } Driver Code Ends