//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    // Function to find the k-th smallest element in the array.
    int kthSmallest(vector<int>& arr, int k) {
        priority_queue<int> maxHeap; // Max heap to store k smallest elements
        
        // Iterate through the array
        for (auto num : arr) {
            maxHeap.push(num); // Add element to the heap

            // Ensure the heap only contains k smallest elements
            if (maxHeap.size() > k) {
                maxHeap.pop();
            }
        }

        return maxHeap.top(); // The k-th smallest element
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t; // Number of test cases
    cin.ignore();
    while (t--) {
        // Read the array
        vector<int> arr, arr2;
        string line, line2;
        getline(cin, line);
        stringstream ss(line);
        int num;
        while (ss >> num) {
            arr.push_back(num);
        }
        int k = arr[0];
        getline(cin, line2);
        stringstream ss2(line2);
        while (ss2 >> num) {
            arr2.push_back(num);
        }

        Solution ob;
        cout << ob.kthSmallest(arr2, k) << endl;
        cout << "~\n";
    }
    return 0;
}
// } Driver Code Ends