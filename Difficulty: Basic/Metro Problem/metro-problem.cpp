//{ Driver Code Starts
//Initial Template for C++

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
    public:
    // Function to calculate the waiting time based on the given inputs
    int waiting_time(int n, char c) {
        // Case when n is exactly 11, no waiting time
        if (n == 11)
            return 0;
        
        // Case when n is less than 11 and the direction is 'U' (Up)
        if (n < 11 && c == 'U')
            return 11 - n;
        
        // Case when n is greater than 11 and the direction is 'D' (Down)
        if (n > 11 && c == 'D')
            return n - 11;
        
        // Case when n is less than 11 and the direction is 'D' (Down)
        if (n < 11 && c == 'D')
            return 11 + n;
        
        // Case when n is greater than 11 and the direction is 'U' (Up)
        if (n > 11 && c == 'U')
            return 19 - n + 8;
        
        // Return -1 for any other case
        return -1;
    }
};


//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		int n;
		cin >> n;
		char c;
		cin >> c;
		Solution ob;
		int ans = ob.waiting_time(n, c);
		cout << ans <<"\n";
	
cout << "~" << "\n";
}  
	return 0;
}
// } Driver Code Ends