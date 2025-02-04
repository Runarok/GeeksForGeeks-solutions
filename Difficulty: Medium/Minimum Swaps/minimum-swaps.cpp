//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
//User function Template for C++
class Solution {
public:
    int minimumSwaps(int c[], int v[], int n, int k, int b, int t)
    {
        // Initialize the number of swaps and the counter for slow-moving elements
        int slow = 0;
        int swap = 0;

        // Traverse the array from the last element to the first
        for (int i = n - 1; i >= 0; i--) {
            // Calculate the current position of the element considering the time 't'
            int pos = c[i] + (v[i] * t);
            
            // If the position exceeds or equals the threshold 'b', it's a valid swap condition
            if (pos >= b) {
                k--; // Decrease the required swaps count
                swap += slow; // Increment swap count by the number of slow-moving elements encountered
                if (k == 0) return swap; // If the required swaps are achieved, return the total swap count
            } else {
                // If the current element can't be swapped yet, increment the slow counter
                slow++;
            }
        }
        
        // If the loop finishes and the required swaps aren't made, return -1
        return -1;
    }
};



//{ Driver Code Starts.
int main(){
    int t=1,testcases=1;
    cin>>t;
    while(t>=testcases)
    {
        int n,k,b,T;
        cin>>n>>k>>b>>T;
        int c[n];
        int v[n];
        for(auto &j:c)
            cin>>j;
        for(auto &j:v)
            cin>>j;
        Solution s;
        int ans=s.minimumSwaps(c,v,n,k,b,T);
        cout<<ans<<endl;
        testcases++;
    
cout << "~" << "\n";
}
    // TIME;
    return 0;
}
// } Driver Code Ends