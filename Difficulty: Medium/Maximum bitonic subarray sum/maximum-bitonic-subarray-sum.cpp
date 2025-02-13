//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
  /*
  flg:
  0 --> started (initial state)
  1 --> rise (increasing sequence)
  2 --> fall (decreasing sequence)
  Bitonic: first rise (flat) then decrease
  */
  #define ll long long int

  int maxSumBitonicSubArr(vector<int>& arr) {
    ll n = arr.size(), curr = arr[0], ans = arr[0];
    ll flg = 0;  // Initialize the flag to 0 (started)
    
    for (ll i = 1; i < n; i++) {
      // Handling rising sequence
      if (arr[i] > arr[i - 1]) {
        // Case: second rise after a dip, reset current sum
        if (flg == 2) {
          curr = arr[i - 1] + arr[i];
        } else {  // Continue the rise and add to the current sum
          curr += arr[i];
        }
        flg = 1;  // Set flag to 1 (rising)
      }
      // Handling falling sequence
      else if (arr[i] < arr[i - 1]) {
        curr += arr[i];  // Continue the fall and add to the current sum
        flg = 2;  // Set flag to 2 (falling)
      }
      // Handling flat sequences (when arr[i] == arr[i - 1])
      else {
        if (flg == 2) {
          curr = arr[i];  // Reset sum if flat sequence after a fall
        } else {
          curr += arr[i];  // Continue adding if in rising state
        }
      }

      // Update the maximum sum found so far
      ans = max(ans, curr); 
    }
    
    return ans;  // Return the maximum sum of the bitonic subsequence
  }
};



//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        string input;
        getline(cin, input); // To handle input
        stringstream ss(input);
        int num;
        vector<int> arr;
        while (ss >> num)
            arr.push_back(num);

        Solution solution;
        cout << solution.maxSumBitonicSubArr(arr) << endl;
        cout << "~\n";
    }
    return 0;
}

// } Driver Code Ends