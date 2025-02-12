//{ Driver Code Starts

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
public:
    int find_pos(int N) {
        // Base cases for small values of N
        if (N == 1 || N == 2 || N == 4) {
            return 1;
        }

        int powerOfTwo = 1;
        
        // Find the highest power of 2 less than or equal to N
        while (N >= 2 * powerOfTwo) {
            powerOfTwo *= 2;
        }
        
        int difference = N - powerOfTwo;

        // Calculate and return the position based on the remaining value
        return 2 * difference + 1;
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
		int ans = ob.find_pos(N);
		cout << ans <<"\n";
	
cout << "~" << "\n";
}  
	return 0;
}
// } Driver Code Ends