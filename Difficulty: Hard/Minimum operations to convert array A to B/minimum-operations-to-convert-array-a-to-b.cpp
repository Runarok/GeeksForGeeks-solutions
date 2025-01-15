//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
//User function Template for C++

class Solution {
  public:
    int minInsAndDel(int A[], int B[], int N, int M) {
        unordered_set<int> st;
        
        for(int i = 0; i < M; i++) {
            st.insert(B[i]);
        }
        
        vector<int> lis;
        
        for(int i = 0; i < N; i++) {
            if(st.find(A[i]) != st.end()) {
                if(lis.empty() || lis.back() < A[i]) {
                    lis.push_back(A[i]);
                } else {
                    int pos = lis.size() - 1;
                    while(pos >= 0 && lis[pos] >= A[i]) {
                        pos--;
                    }
                    lis[pos + 1] = A[i];
                }
            }
        }
        
        return M + N - 2 * lis.size();
    }
};

//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int N,M;
        cin>>N>>M;
        
        int A[N], B[M];
        for(int i=0; i<N; i++)
            cin>>A[i];
        for(int i=0; i<M; i++)
            cin>>B[i];

        Solution ob;
        cout << ob.minInsAndDel(A,B,N,M) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends