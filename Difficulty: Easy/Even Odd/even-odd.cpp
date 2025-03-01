//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
public:
    // Function to print the even number first, followed by the odd number
    void evenOdd(int a, int b) {
        // If 'a' is even, print 'a' first, then 'b'
        if (a % 2 == 0) {
            cout << a << endl;
            cout << b << endl;
        }
        // If 'a' is odd, print 'b' first, then 'a'
        else {
            cout << b << endl;
            cout << a << endl;
        }
    }
};



//{ Driver Code Starts.
int main(){
    int T;
    cin >> T;
    while(T--){
        int a, b;
        cin >> a >> b;
        Solution obj;
        obj.evenOdd(a, b);
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends