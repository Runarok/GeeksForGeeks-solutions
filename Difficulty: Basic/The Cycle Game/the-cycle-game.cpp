//{ Driver Code Starts


#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution{
    public:
    int find_division(int x, int y, int n){
        // Check if 'n' is odd, if so, multiply 'x' by 2
        if(n % 2) x *= 2;
        
        // Return the result of dividing the larger value by the smaller value
        return (int)(max(x, y) / min(x, y));
    }
};


//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		int x, y, n;
		cin >> x>> y >> n;
		Solution ob;
		int ans = ob.find_division(x, y, n);
		cout << ans <<"\n";
	
cout << "~" << "\n";
}  
	return 0;
}
// } Driver Code Ends