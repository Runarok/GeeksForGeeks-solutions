//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution
{
  public:
    string arrangeString(string str, int x, int y)
    {
        // Resultant string to store the final arrangement
        string result = "";
        
        // Flag to indicate which character to place first, starting with '0'
        bool putZero = true;
        
        // Length of the input string
        int n = str.size();
        
        // Frequency map to count occurrences of '0' and '1'
        unordered_map<char, int> frequencyMap;
        for (int i = 0; i < n; i++) {
            frequencyMap[str[i]]++;
        }
        
        // Alternate placing 'x' zeros and 'y' ones
        while (frequencyMap['0'] > 0 && frequencyMap['1'] > 0) {
            int countZero = x; // Maximum zeros to place at once
            int countOne = y;  // Maximum ones to place at once
            
            if (putZero) {
                // Place up to 'x' zeros if available
                while (countZero > 0 && frequencyMap['0'] > 0) {
                    result += '0';
                    frequencyMap['0']--;
                    countZero--;
                }
            } else {
                // Place up to 'y' ones if available
                while (countOne > 0 && frequencyMap['1'] > 0) {
                    result += '1';
                    frequencyMap['1']--;
                    countOne--;
                }
            }
            // Switch to the other character for the next turn
            putZero = !putZero;
        }
        
        // Append any leftover zeros
        while (frequencyMap['0'] != 0) {
            result += '0';
            frequencyMap['0']--;
        }
        
        // Append any leftover ones
        while (frequencyMap['1'] != 0) {
            result += '1';
            frequencyMap['1']--;
        }
        
        return result;
    }
};


//{ Driver Code Starts.

int main(){
    int t;
    cin >> t;
    while(t--){
        int x, y;
        cin >> x >> y;
        string s;
        cin >> s;
        Solution ob;
        cout <<ob.arrangeString(s, x, y) << endl;
    
cout << "~" << "\n";
}
return 0;
}


// } Driver Code Ends