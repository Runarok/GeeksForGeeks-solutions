//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution{
public:
    pair<int, int> largestFraction(int N){
        pair<int,int> k;
        
        // If N is odd, we split it into two nearly equal parts
        // One part is N/2 and the other part is N/2 + 1
        if(N % 2 != 0) {
            k.first = N / 2;
            k.second = N / 2 + 1;
            return k;
        }
        
        // If N is even, check if N/2 is even or odd
        // Based on that, determine the split:
        // If N/2 is even, subtract 1 from N/2 and add 1 to get the pair
        // If N/2 is odd, subtract 2 from N/2 and add 2 to get the pair
        else {
            if((N / 2) % 2 == 0) {
                k.first = N / 2 - 1;
                k.second = N / 2 + 1;
            }
            else {
                k.first = N / 2 - 2;
                k.second = N / 2 + 2;
            }
            return k;
        }
    }
};



//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        int N;
        cin>>N;
        
        Solution ob;
        pair<int, int> ans = ob.largestFraction(N);
        cout<<ans.first<<" "<<ans.second<<"\n";
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends