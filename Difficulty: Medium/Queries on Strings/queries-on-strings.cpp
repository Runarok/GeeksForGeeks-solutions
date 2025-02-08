//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
public:
    vector<int> SolveQueris(string str, vector<vector<int>> Query) {
        // Get the length of the input string
        int n = str.size();

        // Hash table to store frequency of each character up to index i
        vector<vector<int>> charFrequency(n, vector<int>(26, 0));
        vector<int> frequency(26, 0);

        // Precompute character frequency for each prefix of the string
        for (int i = 0; i < n; i++) {
            frequency[str[i] - 'a']++;  // Increment count of current character

            // Store current frequency state in the hash table
            for (int j = 0; j < 26; j++) {
                charFrequency[i][j] = frequency[j];
            }
        }

        // Get the number of queries
        int queryCount = Query.size();
        vector<int> result(queryCount, 0);

        // Process each query
        for (int i = 0; i < queryCount; i++) {
            int startIdx = Query[i][0] - 1;  // Convert to zero-based index
            int endIdx = Query[i][1] - 1;

            int uniqueCharCount = 0;

            // Count distinct characters in the given range
            for (int j = 0; j < 26; j++) {
                int charCount = 0;
                if (startIdx > 0) {
                    charCount = charFrequency[endIdx][j] - charFrequency[startIdx - 1][j];
                } else {
                    charCount = charFrequency[endIdx][j];
                }

                // If character appears at least once in the range, count it
                if (charCount > 0) uniqueCharCount++;
            }

            result[i] = uniqueCharCount;
        }

        return result;
    }
};


//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		string str;
		cin >> str;
		int q;
		cin >> q;
		vector<vector<int>>Query;
		for(int i = 0; i < q; i++){
			int l, r;
			cin >> l >> r;
			Query.push_back({l, r});
		}
		Solution obj;
		vector<int> ans = obj.SolveQueris(str, Query);
		for(auto i: ans)cout << i << " ";
		cout << "\n";
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends