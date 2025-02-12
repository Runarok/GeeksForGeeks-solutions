//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;
#define ll long long

// } Driver Code Ends

class Solution{
    public:
    // ll is defined as long long
    void getTestMarks(ll n, ll q, ll r[], ll l[], ll rank[], ll StoreAnswer[]) {
        // Using an unordered map to store the calculated marks based on rank
        unordered_map<long, long> map;
        vector<long> ans;
        
        // Populate ans vector with the rank values
        for(int i = 1; i <= q; i++) ans.push_back(rank[i]);
        
        // Sort the rank values in ascending order
        sort(ans.begin(), ans.end());
        
        vector<long> list;
        // Initialize the list with the first value of r
        list.push_back(r[1]);
        
        // Populate the list based on the difference between subsequent values of r and l
        for(int i = 2; i <= n; i++) 
            list.push_back(list[i - 2] + r[i] - l[i] + 1);
        
        vector<long> diff;
        // Initialize the diff vector with zero
        diff.push_back((long) 0);
        
        // Populate the diff vector based on the difference between l and r values
        for(int i = 2; i <= n; i++) 
            diff.push_back(diff[i - 2] + l[i] - r[i - 1] - 1);
        
        int j = 0;
        int i = 0;
        
        // Process the queries by comparing the sorted ranks with list values
        while(i < q) {
            if(ans[i] > list[j]) {
                if(j + 1 == list.size()) {
                    map[ans[i]] = ans[i] + diff[j];
                    i++;
                } else {
                    j++;
                }
                continue;
            }
            
            // If j is 0, assign the rank value directly, else adjust based on the diff
            if(j == 0) 
                map[ans[i]] = ans[i];
            else 
                map[ans[i]] = ans[i] + diff[j];
                
            i++;
        }
        
        // Store the final answer for each rank
        for(int k = 1; k <= q; k++) 
            StoreAnswer[k] = map[rank[k]];
    }
};


//{ Driver Code Starts.
int main(){

    ll t;
    cin>>t;
    while(t--){
        ll n, q;
        cin>>n>>q;
        ll r[n+5], l[n+5], rank[q+5], StoreAnswer[q+5];
        for(ll i=1;i<=n;i++)
        cin>>l[i]>>r[i];
        
        for(ll i=1;i<=q;i++)
            cin>>rank[i];
        Solution ob;
        ob.getTestMarks(n, q, r, l, rank, StoreAnswer);
        for(ll i=1;i<=q;i++)
        cout<<StoreAnswer[i]<<" ";
        cout<<endl;
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends