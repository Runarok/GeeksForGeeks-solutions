//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;


class Array
{
public:
    template <class T>
    static void input(vector<T> &A,int n)
    {
        for (int i = 0; i < n; i++)
        {
            scanf("%d ",&A[i]);
        }
    }

    template <class T>
    static void print(vector<T> &A)
    {
        for (int i = 0; i < A.size(); i++)
        {
            cout << A[i] << " ";
        }
        cout << endl;
    }
};


// } Driver Code Ends

class Solution {
  public:
    int p = pow(10, 9) + 7; // Constant for modulo operations (though not used in this logic)

    // Custom comparator for sorting the priority queue
    // The queue will prioritize elements based on the frequency of occurrences
    // If frequencies are the same, the elements will be sorted by their value in descending order
    class compare {
    public:
        bool operator() (pair<int, int>& a, pair<int, int>& b) {
            if (a.second == b.second)
                return a.first > b.first;  // Sort by element value in descending order if frequencies are equal
            return a.second < b.second; // Otherwise, sort by frequency in ascending order
        }
    };

    vector<vector<int>> kTop(vector<int>& aa, int n, int k) 
    {
        vector<vector<int>> result;   // Final result to store k frequent elements at each step
        unordered_map<int, int> frequencyMap; // To store the frequency of each element

        // Iterate through the array to update frequency map and compute top k frequent elements
        for (int i = 0; i < n; i++) {
            frequencyMap[aa[i]]++;  // Increase the frequency of the current element

            // Create a priority queue (max-heap) sorted based on the custom comparator
            priority_queue<pair<int, int>, vector<pair<int, int>>, compare> pq(frequencyMap.begin(), frequencyMap.end());

            int l = 0;  // Counter for number of top elements we have added
            vector<int> out;  // To store the current top k elements
            while (!pq.empty() && l < k) {
                pair<int, int> p = pq.top();  // Get the top element (most frequent)
                pq.pop();  // Remove the top element
                l++;  // Increment the counter
                out.push_back(p.first);  // Add the element to the result
            }

            result.push_back(out);  // Add the top k elements at this step to the result
        }

        return result;  // Return the list of k most frequent elements at each step
    } 
};
//{ Driver Code Starts.

int main(){
    int t;
    scanf("%d ",&t);
    while(t--){
        
        int N;
        scanf("%d",&N);
        
        
        int K;
        scanf("%d",&K);
        
        
        vector<int> a(N);
        Array::input(a,N);
        
        Solution obj;
        vector<vector<int>> res = obj.kTop(a, N, K);
        
        for(auto it:res)
            Array::print(it);
        
    
cout << "~" << "\n";
}
}

// } Driver Code Ends