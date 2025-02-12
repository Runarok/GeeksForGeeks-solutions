//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
    public:
    vector<int> frobenius(int x, int y) {
        // If x and y are not coprime, return {-1} as there is no valid Frobenius number
        if (__gcd(x, y) > 1) return {-1};

        // The Frobenius number is given by (x * y - x - y)
        // The number of non-representable integers is given by ((x-1) * (y-1)) / 2
        return {x * y - x - y, (x - 1) * (y - 1) / 2};
    }    
};
//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		int X, Y;
		cin >> X >> Y;
		Solution ob;
		vector<int> ans = ob.frobenius(X, Y);
		for(auto i : ans)
			cout << i <<" ";
		cout << "\n";
	
cout << "~" << "\n";
}  
	return 0;
}
// } Driver Code Ends