//{ Driver Code Starts
#include <bits/stdc++.h>
#include<string>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    string triDownwards(string s)
    {
        int n = s.size();  // Get the size of the input string
        int k = n;         // Initialize k to track the string length during resizing
        string result = s; // Initialize result with the input string

        // Loop through each character of the string starting from the second character
        for(int i = 1; i < n; i++)
        {
            // For each line, process the characters
            for(int j = 0; j < n; j++)
            {
                result.resize(k++);  // Resize the string to allow addition of characters
                // Add '.' if j < i, otherwise add the character from the original string
                (j < i) ? result.push_back('.') : result.push_back(s[j]);
            }
        }
        
        // Shrink the capacity of the string to optimize memory
        result.shrink_to_fit();
        
        // Return the result string
        return result;
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        string S;
        
        cin >> S;

        Solution ob;
        string ans=ob.triDownwards(S);
        
        for(int i=0 ; i<ans.length() ; i++)
        {
            cout<<ans[i];
            if((i+1)%S.length()==0)
                cout<<endl;
        }
        
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends