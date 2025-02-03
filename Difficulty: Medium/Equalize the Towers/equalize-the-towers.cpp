//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    
    // Function to calculate the total cost for making all towers' heights equal to target height
    long long solve(int target, vector<int> &heights, vector<int>& cost) {
        long long total = 0;
        
        // For each tower, calculate the cost to make its height equal to the target height
        for(int i = 0; i < heights.size(); i++) {
            total += abs(target - heights[i]) * cost[i];
        }
        return total;
    }
    
    // Function to find the minimum cost to equalize all towers' heights
    long long minCostToEqualizeTowers(vector<int>& heights, vector<int>& cost) {
        
        // Set the left and right bounds for the binary search
        long long l = *min_element(heights.begin(), heights.end());
        long long r = *max_element(heights.begin(), heights.end());
        
        long long mid, ans;
        
        // Perform binary search to find the optimal height to minimize cost
        while(l <= r) {
            mid = l + (r - l) / 2;
            
            // Calculate the cost for mid and mid+1 heights
            long long a1 = solve(mid, heights, cost);
            long long a2 = solve(mid + 1, heights, cost);
            
            // If cost for mid is less than for mid+1, move the right bound
            if(a1 < a2) {
                ans = a1;
                r = mid - 1;
            } 
            // Otherwise, move the left bound
            else {
                l = mid + 1;
            }
        }
        
        return ans;
    }
};



//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    cin.ignore(); // Ignore the newline character after t
    while (t--) {
        vector<int> arr1, arr2;
        string input1, input2;

        // Read input for heights array
        getline(cin, input1);
        stringstream ss1(input1);
        int number;
        while (ss1 >> number) {
            arr1.push_back(number);
        }

        // Read input for cost array
        getline(cin, input2);
        stringstream ss2(input2);
        while (ss2 >> number) {
            arr2.push_back(number);
        }

        Solution ob;
        cout << ob.minCostToEqualizeTowers(arr1, arr2) << "\n"
             << "~" << endl;
    }
    return 0;
}

// } Driver Code Ends