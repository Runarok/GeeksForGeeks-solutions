//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    int getNum(int arr[], int N) {
        // If there's only one element, return it directly
        if (N == 1)
            return arr[0];

        // Initialize variables to track the smallest and largest elements
        int smallest = INT_MAX, largest = INT_MIN;

        // Traverse the array to find the smallest and largest elements
        for (int i = 0; i < N; i++) {
            smallest = min(smallest, arr[i]);
            largest = max(largest, arr[i]);
        }

        // Compute and return the Least Common Multiple (LCM) of smallest and largest numbers
        return (smallest * largest) / __gcd(smallest, largest);
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int N;
        
        cin>>N;
        int arr[N];
        
        for(int i=0 ; i<N ; i++)
            cin>>arr[i];

        Solution ob;
        cout << ob.getNum(arr,N) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends