//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    vector<int> findMajor(vector<int>& nums) {
        int n = nums.size();
        int candidate1 = -1, candidate2 = -1, count1 = 0, count2 = 0;

        // Finding two potential candidates for majority elements using Boyer-Moore Voting Algorithm
        for (int num : nums) {
            if (num == candidate1) {
                count1++;
            } else if (num == candidate2) {
                count2++;
            } else if (count1 == 0) {
                candidate1 = num;
                count1 = 1;
            } else if (count2 == 0) {
                candidate2 = num;
                count2 = 1;
            } else {
                count1--;
                count2--;
            }
        }

        // Recount the occurrences of candidate1 and candidate2 in the array
        count1 = count2 = 0;
        for (int num : nums) {
            if (num == candidate1) count1++;
            else if (num == candidate2) count2++;
        }

        vector<int> result;
        // Add the candidates to result if they appear more than n/3 times
        if (count1 > n / 3) result.push_back(candidate1);
        if (count2 > n / 3) result.push_back(candidate2);

        // If no valid majority element, return [-1]
        return result.empty() ? vector<int>{-1} : result;
    }
};



//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    cin.ignore();
    while (t--) {

        string s;
        getline(cin, s);
        stringstream ss(s);
        vector<int> nums;
        int num;
        while (ss >> num) {
            nums.push_back(num);
        }
        Solution ob;
        vector<int> ans = ob.findMajor(nums);
        for (auto &i : ans)
            cout << i << " ";
        cout << "\n";
        cout << "~" << endl;
    }
    return 0;
}
// } Driver Code Ends