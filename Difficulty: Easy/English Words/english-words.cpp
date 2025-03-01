//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    string englishWords(string S) 
    {
        // Variable to keep track of the position of the first vowel
        int brk = 0;
        
        // Loop to find the first vowel in the string
        for (int i = 0; i < S.size(); i++) {
            char letter = S[i];
            if (letter == 'A' || letter == 'E' ||
                letter == 'I' || letter == 'O' ||
                letter == 'U') {
                brk = i; // Store the index of the first vowel
                break;   // Exit loop once the first vowel is found
            }
        }
        
        // If no vowel is found, return the original string
        if (brk == 0) {
            return S;
        }
        
        // Otherwise, rearrange the string as per the rule and add "AY"
        return  S.substr(brk, S.size() - brk) + S.substr(0, brk) + "AY";
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        string S;
        
        cin>>S;

        Solution ob;
        cout << ob.englishWords(S) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends