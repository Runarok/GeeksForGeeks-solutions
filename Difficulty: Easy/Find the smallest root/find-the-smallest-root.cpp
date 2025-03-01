//{ Driver Code Starts


#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
public:
    // Function to calculate the sum of digits of a number
    bool check(long long int a, long long int b) {
        long long int c = 0;
        
        // Calculate the sum of digits of 'a'
        while (a != 0) {
            c = c + a % 10;
            a = a / 10;
        }
        
        // If the sum of digits is equal to 'b', return true (1)
        if (c == b) return true;
        
        // If not, return false (0)
        return false;
    }

    // Function to find the root of the given equation
    long long int Root(long long int n) {
        bool found = false;
        long long int mx = 1e18; // Initialize to a very large number
        
        // Loop from 0 to 90, trying different values for i
        for (long long int i = 0; i <= 90; i++) {
            // Calculate s = i^2 + 4n
            long long int s = i * i + 4 * n;
            long long int sq = sqrt(s); // Calculate the square root of s
            
            // Check if s is a perfect square and if the condition is met
            if (sq * sq == s && check((sq - i) / 2, i)) {
                found = true;
                // If condition is met, update the minimum possible value of root
                mx = min(mx, (sq - i) / 2);
            }
        }

        // If a solution is found, return the minimum value
        if (found) return mx;
        // If no solution is found, return -1
        else return -1;
    }
};



//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		long long int n;
		cin >> n;
		Solution ob;
		long long int ans = ob.Root(n);
		cout << ans << "\n";
	
cout << "~" << "\n";
}  
	return 0;
}
// } Driver Code Ends