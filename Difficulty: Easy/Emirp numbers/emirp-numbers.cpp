//{ Driver Code Starts

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution{
    public:
    vector<int> EmirpNumbers(int N){
        // Code here
        int sz = 1e5;  // Max size for sieve
        bool sieve[sz+1];  // Sieve array to mark primes

        // Initialize the sieve, marking 0 and 1 as non-prime
        for(int i = 0; i <= sz; ++i) {
            if(i == 0 || i == 1) sieve[i] = false;
            else sieve[i] = true;
        }

        // Implement sieve of Eratosthenes to find all primes up to sz
        for(int i = 2; i * i <= sz; ++i) {
            if(sieve[i]) {
                for(int j = i * i; j <= sz; j += i) {
                    sieve[j] = false;
                }
            }
        }

        vector<int> ans;  // Vector to store emirp numbers
        // Iterate from 13 to N to check for emirp numbers
        for(int i = 13; i <= N; ++i) {
            if(sieve[i]) {  // If i is prime
                int n = i, rev = 0;
                // Reverse the digits of i
                while(n) {
                    rev = rev * 10 + n % 10;
                    n /= 10;
                }
                // Check if the reversed number is prime and not equal to the original
                // Also, the reversed number should be less than or equal to N
                if(sieve[rev] && rev != i && rev <= N) {
                    ans.push_back(i);  // Add to result if all conditions are satisfied
                }
            }
        }

        return ans;  // Return the list of emirp numbers
    }
};


//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		int N;
		cin >> N;
		Solution ob;
		vector<int> ans = ob.EmirpNumbers(N);
		for(auto i : ans)cout << i <<" ";
		cout << "\n";
	
cout << "~" << "\n";
}  
	return 0;
}
// } Driver Code Ends