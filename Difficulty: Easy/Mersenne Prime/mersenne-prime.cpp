//{ Driver Code Starts

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution{
    public:
    vector<int> AllMersennePrimeNo(int N)
    {
        // Sieve of Eratosthenes to find all primes up to N
        vector<int> primes(N + 1, 1);
        primes[0] = primes[1] = 0; // 0 and 1 are not primes
        
        for(int i = 2; i <= N; i++) {
            if(primes[i] == 1) {
                for(int j = 2 * i; j <= N; j += i)
                    primes[j] = 0; // Mark multiples of i as non-prime
            }
        }
        
        // Mersenne primes: Numbers of the form 2^i - 1 that are prime
        int m = 1, i = 1;
        vector<int> mersennePrimes;
        
        while(m <= N) {
            if(primes[m])
                mersennePrimes.push_back(m); // Add prime Mersenne numbers
            m |= (1 << i); // Set the i-th bit to 1
            i++;
        }
        
        return mersennePrimes; // Return the list of Mersenne primes
    }
};



//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		int n;
		cin >> n;
		Solution ob;
		vector<int> ans = ob.AllMersennePrimeNo(n);
		for(auto i: ans)
			cout << i <<" ";
		cout <<"\n";
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends