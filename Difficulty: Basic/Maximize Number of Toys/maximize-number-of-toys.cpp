//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

class Solution {
  public:
    // Function to find the maximum number of toys that can be bought within the given budget.
    int maxToys(vector<int>& prices, int budget) {
        // Sorting the array to buy the cheapest toys first
        sort(prices.begin(), prices.end());

        int totalCost = 0, toyCount = 0;

        // Iterating through the sorted toy prices
        for(int i = 0; i < prices.size(); i++) {
            totalCost += prices[i]; // Adding current toy price to total cost

            // Checking if the budget allows purchasing this toy
            if(totalCost <= budget) {
                toyCount++; // Increment count of toys bought
            } else {
                break; // Stop if budget is exceeded
            }
        }
        
        return toyCount; // Return the total number of toys that can be bought
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    cin.ignore();

    while (t-- > 0) {
        string str;
        getline(cin, str);

        stringstream ss(str);
        vector<int> arr;
        int num;
        while (ss >> num) {
            arr.push_back(num);
        }
        int k;
        cin >> k;
        cin.ignore();
        Solution ob;
        cout << ob.maxToys(arr, k) << endl;

        cout << "~"
             << "\n";
    }
    return 0;
}

// } Driver Code Ends