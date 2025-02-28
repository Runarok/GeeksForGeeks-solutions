//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution{
    public:
    
    int isDivisible8(string S) {
        // Count occurrences of 0 and 8 for edge cases with string size less than 3
        int count0 = 0;
        int count1 = 0;
        
        // If the size of the string is less than 3, check for direct divisibility by 8
        if (S.size() < 3) {
            for (int i = 0; i < S.size(); i++) {
                if ((S[i] - '0' == 0)) count0++;
                else if ((S[i] - '0' == 8)) count1++;
            }
            if (count0 > 2 || count1 > 0) return 1;
            return 0;
        }

        // Variables to store individual digits for combination checks
        int key1 = 0, key2 = 0, key3 = 0;

        // Check all possible 3-digit combinations from the string
        for (int i = 0; i < S.size(); i++) {
            key1 = (S[i] - '0'); // First digit
            for (int j = 0; j < S.size(); j++) {
                if (j != i) {
                    key2 = (S[j] - '0'); // Second digit
                    for (int k = 0; k < S.size(); k++) {
                        if (k != j && k != i) {
                            key3 = (S[k] - '0'); // Third digit
                            int number = (key1 * 100) + (key2 * 10) + key3;
                            // If any 3-digit number is divisible by 8, return 1
                            if (number % 8 == 0) return 1;
                        }
                    }
                }
            }
        }
        // If no valid 3-digit combination is divisible by 8, return 0
        return 0;
    }
};



//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        string s;
        cin >> s;
        Solution ob;
        if (ob.isDivisible8(s)) {
            cout << "Divisible" << endl;
        } else
            cout << "Not Divisible" << endl;

    
cout << "~" << "\n";
}
}
// } Driver Code Ends