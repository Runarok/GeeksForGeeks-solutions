//{ Driver Code Starts
//Initial Template for C++

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
	public:
	// Function to find the maximum score achievable given the constraints
	vector<int> maximumScore(int n, int x, int y, int a, int b, int p, int q) {
	    vector<pair<int,int>> v; // Vector to store possible (i, j) pairs where i is the number of easy questions and j is the number of hard questions
	    int total = 0;  // To calculate the score for each valid combination of easy and hard questions
	    int maxi = 0;   // To store the maximum score encountered
	    
	    // Loop through all possible combinations of easy and hard questions
	    for(int i = 0; i <= a; i++) {
	        for(int j = 0; j <= b; j++) {
	            // Check if the total number of questions (i * p + j * q) does not exceed the given number n
	            if(i * p + j * q <= n) {
	                total = x * i + y * j;  // Calculate the score for the current combination
	                // If this score is higher than the previously found maximum, update maxi and store the pair (i, j)
	                if(total >= maxi) {
	                    maxi = total;
	                    v.push_back({i, j});
	                }
	            }
	        }
	    }
	    
	    // Vector to store the result (i, j) for maximum score
	    vector<int> ans(2);
	    int mx = INT_MIN;  // To find the pair (i, j) with the maximum number of easy questions (i)
	    
	    // Iterate through the pairs stored in v and find the pair with the highest number of easy questions
	    for(auto it : v) {
	        if(it.first > mx) {  // Compare the number of easy questions
	            ans[0] = it.first;  // Store the number of easy questions
	            ans[1] = it.second; // Store the number of hard questions
	        }
	    }
	    
	    return ans;  // Return the result with the maximum score
	}
};



//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		int n, x, y, a, b, p, q;
		cin >> n >> x >> y >> a >> b >> p >> q;
		Solution ob;
		vector<int> ans = ob.maximumScore(n, x, y, a, b, p, q);
		for(auto i : ans)
			cout << i << " ";
		cout << "\n";
	
cout << "~" << "\n";
}  
	return 0;
}
// } Driver Code Ends