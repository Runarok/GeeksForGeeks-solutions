//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++

class Solution {
  public:
    int maxBalls(int n, int m, vector<int> a, vector<int> b) {
        // code here
        int asum = 0, bsum=0,ans=0;
        
        int i=0,j=0;
        
        while(i<n && j<m)
        {
            //repeating elemets - last occurence
            
            while(i+1<n && a[i] == a[i+1])  asum += a[i++];
            while(j+1<m && b[j] == b[j+1])  bsum += b[j++];
            
            if(a[i]==b[j])
            {
                ans += max(asum,bsum) + a[i];
                asum=0,bsum=0;
                i++;
                j++;
            }
            else if(a[i] < b[j])
            {
                asum += a[i++];
            }
            else{
                bsum += b[j++];
            }
        }
        
        while(i<n)  asum += a[i++];
        while(j<m)  bsum += b[j++];
        
        ans += max(asum,bsum);
        return ans;
    }
};


//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int N, M;
        cin >> N >> M;
        vector<int> a(N), b(M);
        for (int i = 0; i < N; i++)
            cin >> a[i];
        for (int i = 0; i < M; i++)
            cin >> b[i];

        Solution ob;
        cout << ob.maxBalls(N, M, a, b) << "\n";

        cout << "~"
             << "\n";
    }
    return 0;
}
// } Driver Code Ends