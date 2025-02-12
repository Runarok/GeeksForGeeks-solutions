//{ Driver Code Starts

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

typedef pair<int, int> ip;  // Alias for a pair of integers

class ST {
    vector<int> *tree;  // Segment tree to store the indices of the elements

public:
    // Constructor to initialize the segment tree with a size of 4*n
    ST(int n) {
        tree = new vector<int>[4 * n + 1];
    }

    // Merge two child segments and store the merged result in the current segment
    void merge(int lc, int rc, int curr, vector<ip> &a) {
        int n = tree[lc].size(), m = tree[rc].size(), i = 0, j = 0;
        // Merge two sorted subarrays (tree[lc] and tree[rc])
        while (i < n && j < m) {
            if (tree[lc][i] < tree[rc][j]) {
                tree[curr].push_back(tree[lc][i++]);
            } else {
                tree[curr].push_back(tree[rc][j++]);
            }
        }
        // If there are any remaining elements in either subarray, add them
        while (i < n) {
            tree[curr].push_back(tree[lc][i++]);
        }
        while (j < m) {
            tree[curr].push_back(tree[rc][j++]);
        }
    }

    // Build the segment tree recursively
    void build(int node, int start, int end, vector<ip> &a) {
        if (start == end) {
            tree[node].push_back(a[start - 1].second);
            return;
        }
        int mid = (start + end) >> 1, lc = node << 1, rc = lc | 1;
        build(lc, start, mid, a);
        build(rc, mid + 1, end, a);
        merge(lc, rc, node, a);
    }

    // Query the segment tree for the k-th smallest element in the range [l, r]
    int query(int node, int start, int end, int l, int r, int k) {
        if (start == end)
            return tree[node][0];
        int mid = (start + end) >> 1, lc = (node << 1), rc = lc | 1;
        // Find the number of elements in the left child segment tree in the range [l, r]
        int lLoc = lower_bound(tree[lc].begin(), tree[lc].end(), l) - tree[lc].begin();
        int rLoc = upper_bound(tree[lc].begin(), tree[lc].end(), r) - tree[lc].begin();
        
        int range = rLoc - lLoc;
        // If there are enough elements in the left child segment tree, query it
        if (range >= k)
            return query(lc, start, mid, l, r, k);
        else
            // Otherwise, query the right child segment tree with the remaining elements
            return query(rc, mid + 1, end, l, r, k - range);
    }
};

class Solution {
public:
    vector<int> FindQuery(vector<int> b, vector<vector<int>> Q) {
        int n = b.size();
        vector<ip> a;
        
        // Prepare the array with elements and their original indices
        for (int i = 0; i < n; i++) {
            a.push_back({b[i], i + 1});
        }

        // Sort the array based on the values
        sort(a.begin(), a.end());

        // Initialize the segment tree
        ST st(n);
        st.build(1, 1, n, a);

        vector<int> ans;

        // Process each query
        for (int i = 0; i < Q.size(); i++) {
            int l = Q[i][0], r = Q[i][1], k = Q[i][2];
            // Query the k-th smallest element in the range [l, r]
            ans.push_back(b[st.query(1, 1, n, l, r, k) - 1]);
        }

        return ans;
    }
};

//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		int n, q;
		cin >> n >> q;
		vector<int>nums(n);
		for(int i = 0; i < n; i++)
			cin >> nums[i];
		vector<vector<int>>Query;
		for(int i = 0; i < q; i++){
			int l, r, k;
			cin >> l >> r >> k;
			Query.push_back({l, r, k});
		}
		Solution obj;
		vector<int>ans = obj.FindQuery(nums, Query);
		for(auto i: ans)
			cout << i << "\n";
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends