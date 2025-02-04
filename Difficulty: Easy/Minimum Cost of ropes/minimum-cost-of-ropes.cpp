//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
public:
    // Function to return the minimum cost of connecting the ropes.
    int minCost(vector<int>& arr) {
        // Create a priority queue (min-heap) to always extract the two smallest ropes
        priority_queue<int, vector<int>, greater<int>> q;

        // Step 1: Insert all the rope lengths into the min-heap
        for(int x: arr) {
            q.push(x);
        }

        // Variable to keep track of the total cost
        int cost = 0;

        // Step 2: Combine the two smallest ropes until only one remains
        while(q.size() > 1) {
            // Extract the two smallest ropes
            int s1 = q.top(); // Smallest rope
            q.pop();
            int s2 = q.top(); // Second smallest rope
            q.pop();

            // The cost to connect these two ropes
            int connectCost = s1 + s2;
            // Add the connection cost to the total cost
            cost += connectCost;

            // Insert the combined rope back into the heap
            q.push(connectCost);
        }

        // Return the total cost of connecting all the ropes
        return cost;
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
        vector<int> a;

        getline(cin, input);
        stringstream s2(input);
        while (s2 >> num) {
            a.push_back(num);
        }
        Solution ob;
        cout << ob.minCost(a) << endl;
        cout << "~"
             << "\n";
    }
    return 0;
}

// } Driver Code Ends