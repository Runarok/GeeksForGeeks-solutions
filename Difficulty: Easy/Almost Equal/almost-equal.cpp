//{ Driver Code Starts
//Initial Template for C++
#include <bits/stdc++.h>
using namespace std;



// } Driver Code Ends

// User function Template for C++

/* Function to count number of characters
 * to make s1 and s2 equal
 * s1 : first string
 * s2 : second string
 */
class Solution {
public:
    int countChars(string s1, string s2) {
        // Initialize frequency arrays for both strings
        vector<int> freq1(26, 0);
        vector<int> freq2(26, 0);

        // Count frequency of characters in s1
        for (char c : s1) {
            freq1[c - 'a']++;
        }

        // Count frequency of characters in s2
        for (char c : s2) {
            freq2[c - 'a']++;
        }

        // Initialize the variable to keep track of deletions
        int del = 0;

        // Calculate the total number of deletions needed
        for (int i = 0; i < 26; i++) {
            del += abs(freq1[i] - freq2[i]);
        }

        // Return the total number of deletions
        return del;
    }
};


//{ Driver Code Starts.
int main() {
	
	int testcase;
	
	cin >> testcase;
	
	while(testcase--){
	    
	    // taking string input
	    string s1, s2;
	    cin >> s1 >> s2;
	    Solution obj;
	    cout << obj.countChars(s1, s2) << endl;
	
cout << "~" << "\n";
}
	
	return 0;
}
// } Driver Code Ends