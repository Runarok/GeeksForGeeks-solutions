//{ Driver Code Starts


#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution{
    public:
    vector<int> AllPrimeFactors(int N) {
        vector<int> vec;
        
        // Check for each number from 2 to sqrt(N)
        for(int i = 2; i <= sqrt(N); i++) {
            // If i divides N, it's a prime factor
            if (N % i == 0) {
                vec.push_back(i);
                
                // Divide N by i to remove the factor
                while (N % i == 0) {
                    N /= i;
                }
            }
        }
        
        // If N is still greater than 1, it's a prime factor
        if (N != 1) {
            vec.push_back(N);
        }
        
        return vec;
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
		vector<int>ans = ob.AllPrimeFactors(N);
		for(auto i: ans)
			cout << i <<" ";
		cout <<"\n";
	
cout << "~" << "\n";
}  
	return 0;
}
// } Driver Code Ends