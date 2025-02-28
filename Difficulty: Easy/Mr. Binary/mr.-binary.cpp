//{ Driver Code Starts

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends


class Solution {
public:
    int maximum_index(const string &s) {
        // Array to store the last occurrence index of each character
        vector<int> lastIndex(26, -1);
        
        int maxIndex = 0;
        
        for (int i = 0; i < s.size(); ++i) {
            int currentChar = s[i] - 'a';
            
            if (currentChar > 0) {
                int previousChar = currentChar - 1;
                
                // Check if the previous character exists and appears before the current one
                if (lastIndex[previousChar] != -1 && lastIndex[previousChar] < i) {
                    maxIndex = max(maxIndex, i);
                    lastIndex[currentChar] = i; // Update the last occurrence of the current character
                }
            } else {
                // For 'a' (the first character), no previous character check is needed
                maxIndex = max(maxIndex, i);
                lastIndex[currentChar] = i;
            }
        }
        
        return maxIndex;
    }
};


//{ Driver Code Starts.
int main(){
    int t;
    cin >> t;
    while(t--)
    {
	    string s;
	    cin >> s;
	    Solution ob;
	    int ans = ob.maximum_index(s);
	    cout<<ans<<"\n";
    
cout << "~" << "\n";
}
	return 0;
}

// } Driver Code Ends