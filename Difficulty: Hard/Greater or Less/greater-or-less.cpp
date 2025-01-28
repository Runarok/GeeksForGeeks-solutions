//{ Driver Code Starts
//Initial Template for C++

#include<bits/stdc++.h> 
using namespace std; 

// } Driver Code Ends
//User function Template for C++
class Solution {   
public:
    // Structure representing the Segment Tree
    struct Seg_Tree {
        vector<int> tree, arr; // Stores the segment tree and the input array
        int n; // Size of the input array

        public:
        // Constructor to initialize the segment tree and input array
        Seg_Tree(int _n, vector<int> _arr) {
            n = _n;
            tree.resize(4 * n + 4); // Allocate memory for the segment tree
            arr = _arr; // Store the input array
        }

        // Builds the segment tree for range sum
        void build(int s, int e, int idx) {
            // If we reach a leaf node, store the array value
            if (s == e) {
                tree[idx] = arr[s];
                return;
            }

            int mid = s + (e - s) / 2;
            // Recursively build left and right children
            build(s, mid, 2 * idx);
            build(mid + 1, e, 2 * idx + 1);

            // Store the sum of the left and right children
            tree[idx] = tree[2 * idx] + tree[2 * idx + 1];
        }

        // Updates the value at a specific position in the segment tree
        void update(int pos, int v, int s, int e, int idx) {
            // Ignore if the position is out of the current range
            if (pos < s || pos > e) return;

            // Update the value at the leaf node
            if (s == e) {
                tree[idx]++;
                return;
            }

            int mid = s + (e - s) / 2;
            // Recursively update left or right child
            update(pos, v, s, mid, 2 * idx);
            update(pos, v, mid + 1, e, 2 * idx + 1);

            // Update the current node with the sum of its children
            tree[idx] = tree[2 * idx] + tree[2 * idx + 1];
        }

        // Overloaded update function for simpler calls
        void update(int pos, int v) {
            update(pos, v, 1, n, 1);
        }

        // Queries the sum in the given range [qs, qe]
        int query(int qs, int qe, int s, int e, int idx) {
            // If the query range completely overlaps the current range
            if (qs <= s && qe >= e) return tree[idx];

            // If the query range is outside the current range
            if (qs > e || qe < s) return 0;

            int mid = s + (e - s) / 2;
            // Combine results from the left and right children
            return query(qs, qe, s, mid, 2 * idx) + query(qs, qe, mid + 1, e, 2 * idx + 1);
        }

        // Overloaded query function to query values greater than 'v'
        int query(int v) {
            return query(v + 1, n, 1, n, 1);
        }
    };

    // Solves the sub-problem for calculating the number of greater elements
    vector<int> solve(vector<int> arr, int n) {
        vector<int> A(n + 1);
        map<int, int> mp;

        // Normalize the array values to a smaller range
        for (int i = 0; i < n; i++) mp[arr[i]] = 0;

        int c = 0;
        for (auto i : mp) mp[i.first] = ++c;

        for (int i = 1; i <= n; i++) A[i] = mp[arr[i - 1]];

        vector<int> res;
        Seg_Tree ob(n, arr);

        for (int i = 1; i <= n; i++) {
            // Update the segment tree for the current value
            ob.update(A[i], 1);

            // Query the number of greater elements
            res.push_back(ob.query(A[i]));
        }

        return res;
    }

    // Calculates the difference between greater and lesser values
    vector<int> greaterLesser(vector<int> A, int N) {
        vector<int> left, right, ans;

        // Calculate the number of greater elements on the left
        left = solve(A, N);

        vector<int> temp(N);
        for (int i = 0; i < N; i++) temp[i] = -A[N - i - 1];

        // Calculate the number of greater elements on the right
        right = solve(temp, N);

        // Compute the absolute difference between left and right
        for (int i = 0; i < N; i++) ans.push_back(abs(left[i] - right[N - i - 1]));

        return ans;
    }
};


//{ Driver Code Starts.

int main() 
{ 
    int t;
    cin>>t;
    while(t--)
    {
        int N;
        cin >> N;
        vector<int>A(N);
        for(int i = 0; i < N; i++)
            cin >> A[i];
        
        Solution ob;
        vector<int>ans(N);
        ans=ob.greaterLesser(A, N);
        for(int i = 0; i < N; i++)
            cout << ans[i] << " ";
        cout << endl;
    
cout << "~" << "\n";
}
    return 0; 
} 

// } Driver Code Ends