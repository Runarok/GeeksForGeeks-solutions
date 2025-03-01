//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution{
public:
    int minToggle(int n, int arr[]){
        // Array to store the count of zeroes up to each index
        int zero[n + 1]; 
        zero[0] = 0; 

        // Fill the zero[] array such that zero[i] stores the count of zeroes to the left of index i
        for (int i = 1; i <= n; ++i) { 
            // If a zero is found, increment the count in the zero[] array
            if (arr[i - 1] == 0) 
                zero[i] = zero[i - 1] + 1; 
            else
                zero[i] = zero[i - 1]; 
        } 

        // Variable to store the minimum toggle required
        int ans = n; 

        // Check for the minimum toggle required from each index (0 to n-1)
        for (int i = 1; i <= n; ++i) 
            ans = min(ans, i - zero[i] + zero[n] - zero[i]); 

        return ans; 
    }
};



//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        int n;
        cin>>n;
        int arr[n];
        for(int i = 0;i < n;i++)
            cin>>arr[i];
        
        Solution ob;
        cout<<ob.minToggle(n, arr)<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends