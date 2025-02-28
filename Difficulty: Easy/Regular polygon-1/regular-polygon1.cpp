//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    // Function to check if a polygon is possible by checking the required conditions
    bool check(vector<int>& arr, int s, int st) {
        int num = arr.size() / s;
        for (int i = 0; i < num; i++) {
            // If the value at the current position is 0, polygon formation is not possible
            if (!arr[st]) {
                return false;
            }
            st += s;  // Move to the next segment
        }
        return true;  // Return true if the polygon can be formed
    }

    // Function to check for possible polygons for a given s
    bool checks(vector<int>& arr, int s) {
        int n = arr.size();
        
        // If there are fewer than 3 sides for the polygon, it's not possible
        if (n / s < 3) {
            return false;
        }
        
        // Check for each starting point if a polygon can be formed
        for (int i = 0; i < s; i++) {
            if (check(arr, s, i)) {
                return true;  // Return true if a valid polygon formation is found
            }
        }
        return false;  // Return false if no valid polygon formation is found
    }
    
    // Function to check if a polygon is possible based on given array of side lengths
    bool isPolygonPossible(vector<int> arr) {
        int n = arr.size();
        
        // If there are fewer than 3 sides, a polygon cannot be formed
        if (n < 3) {
            return false;
        }
        
        // Try all possible divisors of n to check if a polygon can be formed
        for (int i = 1; i <= sqrt(n); i++) {
            // Skip if i is not a divisor of n
            if (n % i) {
                continue;
            }
            
            // Check if a valid polygon can be formed for divisor i
            if (checks(arr, i)) {
                return true;
            }
            
            // Check if a valid polygon can be formed for divisor n / i
            if (checks(arr, n / i)) {
                return true;
            }
        }
        
        return false;  // Return false if no valid polygon can be formed
    }
};



//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        string input;
        int num;
        vector<int> arr;

        getline(cin, input);
        stringstream s2(input);
        while (s2 >> num) {
            arr.push_back(num);
        }
        Solution ob;
        cout << (ob.isPolygonPossible(arr) ? "true" : "false") << endl;

        cout << "~"
             << "\n";
    }
    return 0;
}

// } Driver Code Ends