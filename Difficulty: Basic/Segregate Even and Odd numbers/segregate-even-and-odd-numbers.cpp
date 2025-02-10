//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends


class Solution{
public:
    void segregateEvenOdd(std::vector<int>& arr) {
        std::vector<int> even, odd;
        
        // Step 1: Segregate even and odd numbers
        for (int num : arr) {
            if (num % 2 == 0) {
                even.push_back(num);
            } else {
                odd.push_back(num);
            }
        }

        // Step 2: Sort both even and odd arrays
        std::sort(even.begin(), even.end());
        std::sort(odd.begin(), odd.end());

        // Step 3: Modify original array in-place
        int index = 0;
        // Copy even numbers back into the original array
        for (int num : even) {
            arr[index++] = num;
        }
        // Copy odd numbers back into the original array
        for (int num : odd) {
            arr[index++] = num;
        }
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
        obj.segregateEvenOdd(arr);
        for (int i = 0; i < arr.size(); i++) {
            cout << arr[i] << " ";
        }
        cout << endl;
        cout << "~" << endl;
        // string tl;
        // getline(cin, tl);
    }
    return 0;
}
// } Driver Code Ends