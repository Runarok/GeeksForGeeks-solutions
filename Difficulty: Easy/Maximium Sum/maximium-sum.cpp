//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

// Back-end complete function Template for C++

class Solution {
  public:
    int maximum_sum(int k, vector<int> &arr) {
        // Max heap to store frequency and corresponding element.
        // (frequency, element)
        priority_queue<pair<int,int>, 
                       vector<pair<int,int>>>
                       pq;

        // Frequency map to count occurrences of each element in arr.
        std::map<int, int> frequencyMap;

        // Populate frequency map.
        for (auto element : arr) {
            frequencyMap[element]++;
        }

        // Push each (frequency, element) pair into the max heap.
        for (auto entry : frequencyMap) {
            pq.push({entry.second, entry.first});
        }

        int sum = 0;

        // Process up to k elements from the max heap.
        for (int i = 0; i < k; i++) {
            if (pq.empty()) {
                break;
            }

            // Extract the element with the highest frequency.
            auto top = pq.top();
            pq.pop();

            // Add the element value to the sum.
            sum += top.second;

            // Decrease the frequency and re-insert into heap if still valid.
            top.first -= 1;
            if (top.first > 0) {
                pq.push(top);
            }
        }

        // Return the final calculated sum.
        return sum;
    }
};


//{ Driver Code Starts.

vector<int> inputLine() {
    string str;
    getline(cin, str);
    stringstream ss(str);
    int num;
    vector<int> res;
    while (ss >> num) {
        res.push_back(num);
    }
    return res;
}

int main() {
    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        int k;
        cin >> k;
        cin.ignore();
        vector<int> v = inputLine();

        Solution obj;
        cout << obj.maximum_sum(k, v) << endl;
        cout << "~" << endl;
    }
    return 0;
}

// } Driver Code Ends