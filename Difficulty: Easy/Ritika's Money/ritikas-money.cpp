//{ Driver Code Starts
//Initial Template for C++

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution{
	public:
	// HashMap to store already computed results for specific values of N
	unordered_map<long long, long long> dp;
	
	// Function to compute the maximum exchange money for a given N
	long long int MaxExchangeMoney(long long int N) {
	    if(N == 0) return 0;  // Base case: if N is 0, no exchange can be made
	    
	    // If the result for N is already computed, return it from the dp map
	    if(dp.count(N)) return dp[N];
	    
	    // Calculate the maximum money we can get by exchanging N into smaller parts
	    auto a = MaxExchangeMoney(N/2) + MaxExchangeMoney(N/3) + MaxExchangeMoney(N/4);
	    
	    // Store the result for N in the dp map and return the maximum of a or N
	    return dp[N] = a > N ? a : N;
	}
};



//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		long long int N;
		cin >> N;
		Solution ob;
		long long int ans = ans = ob.MaxExchangeMoney(N);
		cout << ans <<"\n";
	
cout << "~" << "\n";
}  
	return 0;
}
// } Driver Code Ends