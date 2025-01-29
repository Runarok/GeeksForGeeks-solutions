//{ Driver Code Starts
/* Driver program to test above function */

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends
//User function Template for C++
// User function Template for C++ 
class Solution {
    public:
    // This function calculates the total distance of a given line from a list of points.
    double findTotalDistance(tuple<int, int, int> &l, vector<pair<int,int>> &p, int n, double x){
        // Unpack the coefficients of the line equation (a, b, c) from the tuple l
        double a = get<0>(l);
        double b = get<1>(l);
        double c = get<2>(l);

        // Calculate the y-value on the line at a specific x (from the equation ax + by + c = 0)
        double y = -1 * (c + (a * x)) / b;
        
        double distance = 0;
        // Iterate over all points in the vector p and calculate the distance to the line at x
        for(auto &e : p){
            double x1 = e.first;
            double y1 = e.second;
            
            // Calculate the Euclidean distance from the point (x1, y1) to the line at (x, y)
            distance += sqrt((x1 - x)*(x1 - x) + (y1 - y)*(y1 - y));
        }
        return distance;
    }

    // This function finds the optimal cost using ternary search for the minimum distance
    double findOptimumCost(tuple<int,int,int> l, vector<pair<int,int>> p, int n){
        // Initial values for the search interval (from -1e6 to 1e6)
        double low = -1e6;
        double high = 1e6;
        
        // Precision for the search, when the interval is smaller than this, we stop
        double eps = 1e-6;
        
        // Perform ternary search to find the minimum distance
        while (high - low > eps) {
            // Divide the current search interval into three parts (x1 and x2)
            double x1 = low + (high - low) / 3;
            double x2 = high - (high - low) / 3;

            // Calculate the total distance at both x1 and x2
            double d1 = findTotalDistance(l, p, n, x1);
            double d2 = findTotalDistance(l, p, n, x2);

            // Narrow down the search interval based on which side has the smaller distance
            if (d1 > d2) {
                low = x1;
            }
            else if (d1 < d2) {
                high = x2;
            }
            else {
                // If both distances are equal, reduce the search interval symmetrically
                low = x1;
                high = x2;
            }
        }

        // Return the minimum distance found at the optimal x value (low or high)
        return (findTotalDistance(l, p, n, low));
    }
};


//{ Driver Code Starts.
int main()
{
	int t;
	cin>>t;
	while(t--)
	{
	    tuple<int,int,int>line;
	    int a, b, c;
	    cin >> a >> b >> c;
	    line = make_tuple(a, b, c);
	    int n;
	    cin >> n;
	    vector<pair<int,int>>points;
	    for(int i = 0 ; i < n; i++){
	        int x, y;
	        cin >> x >> y;
	        points.push_back({x, y});
	    }

	    Solution ob;
	    double ans = ob.findOptimumCost(line, points, n);

	    cout << fixed << setprecision(2) << ans << endl;
	
cout << "~" << "\n";
}
	return 0;
}

// } Driver Code Ends