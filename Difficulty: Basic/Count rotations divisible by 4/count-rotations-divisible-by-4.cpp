//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
public:
    // Function to count the number of two-digit rotations of N that are divisible by 4
    int countRotations(string N) {
        int count = 0;

        // Iterate through the string to check every adjacent pair
        for (size_t i = 0; i < N.size() - 1; i++) {
            // Extract two-digit substring
            string twoDigitStr = N.substr(i, 2);
            int num = stoi(twoDigitStr);
            
            // Check if the number is divisible by 4
            if (num % 4 == 0) {
                count++;
            }
        }

        // Check the last and first digit together as a rotation
        string lastFirst = "";
        lastFirst += N[N.size() - 1];
        lastFirst += N[0];

        // Convert to integer and check divisibility
        if (stoi(lastFirst) % 4 == 0) {
            count++;
        }

        return count;
    }
};


//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        string N;
        cin>>N;
        
        Solution ob;
        cout<<ob.countRotations(N)<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends