//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function template for C++

class Solution {
  public:
    // Function to calculate the total distance between consecutive unique elements in the array
    long long distance(vector<int>& arr) {
        // Create a map to store the last occurrence index of each element
        map<int, int> mp;

        // Store the last occurrence index of each element in the array
        for (int i = 0; i < arr.size(); i++) {
            mp[arr[i]] = i;
        }

        // Create iterators for traversing the map
        map<int, int>::iterator it1 = mp.begin();
        map<int, int>::iterator it2 = mp.begin();
        it2++; // Move the second iterator to the second element

        // Initialize the variable to store the total distance
        long long int ans = 0;

        // Iterate through the map and calculate the distance between consecutive elements
        for (; it2 != mp.end(); it2++, it1++) {
            ans += abs(it1->second - it2->second); // Calculate the absolute distance between indices
        }

        // Return the total distance
        return ans;
    }
};


//{ Driver Code Starts.
int main() {
    string ts;
    getline(cin, ts);
    int t = stoi(ts);
    while (t--) {
        vector<int> arr;
        string input;
        getline(cin, input);
        stringstream ss(input);
        int number;
        while (ss >> number) {
            arr.push_back(number);
        }
        Solution obj;
        auto ans = obj.distance(arr);
        cout << ans << "\n";
        cout << "~" << endl;
    }
}

// } Driver Code Ends