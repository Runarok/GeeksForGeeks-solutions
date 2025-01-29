//{ Driver Code Starts
//Initial Template for C++

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends
//User function Template for C++

class Solution{
    public:
    
    // Helper function to find the optimal k centers
    void kcenterhelper(int k, int n, int &result, vector<int>& selected, vector<vector<int>>& mat) {
        // Base case: if we have selected k cities
        if(k == 0) {
            int maxdist = 0;  // To store the maximum distance of any city from the selected centers
            // Iterate over all cities
            for(int i = 0; i < n; i++) {
                int mindistserver = INT_MAX;  // Minimum distance from city i to any selected center
                // Find the closest selected center for city i
                for(int j = 0; j < selected.size(); j++) {
                    mindistserver = min(mindistserver, mat[i][selected[j]]);
                }
                // Find the maximum of these minimum distances
                maxdist = max(maxdist, mindistserver);
            }
            // Update the result with the minimum of the current result and maxdist
            result = min(result, maxdist);
        }
        else {
            // Select cities recursively for the k centers
            for(int i = 0; i < n; i++) {
                // Try selecting the i-th city as one of the centers
                selected.push_back(i);
                // Call the helper function recursively to select the remaining k-1 centers
                kcenterhelper(k-1, n, result, selected, mat);
                // Backtrack by removing the last selected city
                selected.pop_back();
            }
        }
    }
    
    // Function to select k cities such that the maximum distance from any city to its nearest selected city is minimized
    int selectKcities(int n, int k, vector<vector<int>>& mat) {
        // Variable to store the minimum of the maximum distances
        int result = INT_MAX;
        // Vector to store the selected cities
        vector<int> selected;
        // Call the helper function to start the selection process
        kcenterhelper(k, n, result, selected, mat);
        return result;  // Return the minimized maximum distance
    }
};


//{ Driver Code Starts.


int main(){
    int t;
    cin>>t;
    while(t--){
        int n,k;
        cin>>n>>k;
        vector<vector<int>> mat(n, vector<int>(n));
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                cin>>mat[i][j];
            }
        }
        
        Solution obj;
        int ans = obj.selectKcities(n, k, mat);
        
        cout<<ans<<endl;
    
cout << "~" << "\n";
}
}
// } Driver Code Ends