//{ Driver Code Starts


#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution{
	public:
	// Function to check if a number is prime
	bool isprime(int n){
	    if(n <= 1) return false;  // Numbers less than or equal to 1 are not prime
	    for(int i = 2; i * i <= n; i++){  // Check divisibility up to the square root of n
	        if(n % i == 0) return false;  // If divisible, it's not prime
	    }
	    return true;  // n is prime
	}

	// Function to count interesting prime numbers
	int CountInterestingPrimeNo(int N){
	    set<int> primes;  // Set to store unique prime numbers
	    
	    // Iterate over all possible square numbers
	    for(int i = 1; i * i <= N; i++){
	        int a = i * i;  // Square of i
	        
	        // Iterate over all possible fourth power numbers
	        for(int j = 1; j * j * j * j <= N; j++){
	            int b = j * j * j * j;  // Fourth power of j
	            int sum = a + b;  // Sum of the square and fourth power
	            
	            if(sum > N) break;  // If sum exceeds N, break the loop
	            
	            // If sum is prime, add it to the set of primes
	            if(isprime(sum)){
	                primes.insert(sum);
	            }
	        }
	    }
	    
	    // Return the size of the set containing unique primes
	    return primes.size();
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
		int ans = ob.CountInterestingPrimeNo(N);
		cout << ans << "\n";
	
cout << "~" << "\n";
}  
	return 0;
}
// } Driver Code Ends