//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class comp{
        public:
        
        bool operator()(pair<double, int>&a, pair<double, int>&b)
        {
            double d1 = a.first/a.second;
            double d2 = b.first/b.second;
            
            return d1<d2;
        }
};

class Solution {
  public:
    double findSmallestMaxDist(vector<int> &stations, int k) {
        // Code here
        int n = stations.size();
        priority_queue<pair<double, int>, vector<pair<double, int>>, comp> gap;
        
        for(int i=0;i<n-1;i++)
        {
            double diff = stations[i+1]-stations[i];
            gap.push({diff, 1});
        }
        
        
        for(int j=0;j<k;j++)
        {
            
            pair<double, int> topElem = gap.top();
            gap.pop();
            
            pair<double, int> newElem = {topElem.first, topElem.second+1};
            gap.push(newElem);
           
            
        }
        
        pair<double, int> topElem = gap.top();
        double rounded = round((topElem.first/topElem.second) * 100.0) / 100.0;
        
        return rounded;
    }
};

//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        vector<int> stations(n);
        for (int i = 0; i < n; i++) {
            cin >> stations[i];
        }
        int k;
        cin >> k;
        Solution obj;
        cout << fixed << setprecision(2) << obj.findSmallestMaxDist(stations, k)
             << endl;
        cout << "~" << endl;
    }
    return 0;
}
// } Driver Code Ends