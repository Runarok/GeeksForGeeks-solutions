//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    // Function to rearrange the array in alternating order from smallest to largest
    void rearrangeArray(vector<int>& arr) {
        // Check if the array is already sorted, if not, sort it
        if (!std::is_sorted(arr.begin(), arr.end())) {
            std::sort(arr.begin(), arr.end());
        }

        // Create a sorted copy of the array
        std::vector<int> sorted = arr;  
        arr.clear(); // Clear the original array to rearrange the elements

        int s = 0, e = sorted.size() - 1;  // Initialize pointers for smallest and largest elements
        while (s <= e) {  
            arr.push_back(sorted[s]); // Add the smallest element
            s++;  // Move the left pointer to the right

            // Add the largest element if the pointers haven't crossed
            if (s <= e) { 
                arr.push_back(sorted[e]); 
                e--;  // Move the right pointer to the left
            }
        }
    }
};



//{ Driver Code Starts.
//          Driver code
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
        Solution Obj;
        Obj.rearrangeArray(arr);
        int n = arr.size();
        for (int i = 0; i < n; i++)
            cout << arr[i] << " ";
        cout << endl;
    }
    return 0;
}
// } Driver Code Ends