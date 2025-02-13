//{ Driver Code Starts

#include <bits/stdc++.h>
#include <queue>
using namespace std;
#define endl "\n"


// } Driver Code Ends

class Solution {
public:
    long long maximumSum(vector<long> arr) {
        // Get the size of the array
        int n = arr.size();
        
        // Initialize the result to 0
        long long res = 0;
        
        // Set i and j for the two halves of the array
        long long i = (n - 1) / 2, j = n / 2;
        
        // Create a max-heap to store the maximum values
        priority_queue<int> maxHeap;
        
        // If there's a middle element for odd-sized array, add it to the result
        if (i == j) {
            res += arr[i];
            i--; j++;  // Adjust i and j for the next iteration
        }
        
        // Loop while i is not negative (we still have elements from both halves)
        while (i >= 0) {
            // Push elements from both halves into the max-heap
            maxHeap.push(arr[i--]);
            maxHeap.push(arr[j++]);
            
            // Add the top (maximum) value from the heap to the result
            res += maxHeap.top();
            maxHeap.pop();  // Remove the top element after adding
        }
        
        // Return the final result
        return res;
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
        vector<long> arr;

        getline(cin, input);
        stringstream s2(input);
        while (s2 >> num) {
            arr.push_back(num);
        }
        Solution obj;
        cout << obj.maximumSum(arr) << endl;
        cout << "~" << endl;
    }
    return 0;
}
// } Driver Code Ends