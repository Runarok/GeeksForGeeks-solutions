//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
    public:
    // Function to count the number of elements that appear exactly n/k times in the array
    int countSpecials(int k, vector<int> &arr) {
        int n = arr.size();  // Get the size of the array
        int x = floor(n / k);  // Calculate the required frequency for special elements
        int count = 0;  // Initialize the counter for special elements
        unordered_map<int, int> elementCount;  // Map to store the count of each element
        
        // Iterate through the array and count the occurrences of each element
        for(int num : arr){
            elementCount[num]++;
        }
        
        // Iterate through the map and count how many elements have exactly x occurrences
        for(const auto& pair : elementCount){
            if(pair.second == x){
                count++;
            }
        }
        
        return count;  // Return the final count of special elements
    }
};



//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int k;
        cin >> k;
        cin.ignore();
        string s;
        getline(cin, s);
        stringstream ss(s);
        vector<int> arr;
        int num;
        while (ss >> num) {
            arr.push_back(num);
        }
        Solution ob;
        cout << ob.countSpecials(k, arr) << endl;
        cout << "~" << endl;
    }
    return 0;
}

// } Driver Code Ends