//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
public:
    vector<set<int>> setOperations(set<int> A, set<int> B) {
        // Initialize the result vector to store the result sets
        vector<set<int>> result;

        // Union: Combine elements from both sets A and B
        set<int> unionSet;
        set_union(A.begin(), A.end(), B.begin(), B.end(), inserter(unionSet, unionSet.begin()));
        if (unionSet.empty()) unionSet.insert(0);  // Insert 0 if the union is empty
        result.push_back(unionSet);

        // Difference (A - B): Elements in A but not in B
        set<int> differenceSet;
        set_difference(A.begin(), A.end(), B.begin(), B.end(), inserter(differenceSet, differenceSet.begin()));
        if (differenceSet.empty()) differenceSet.insert(0);  // Insert 0 if the difference is empty
        result.push_back(differenceSet);

        // Intersection: Common elements between A and B
        set<int> intersectionSet;
        set_intersection(A.begin(), A.end(), B.begin(), B.end(), inserter(intersectionSet, intersectionSet.begin()));
        if (intersectionSet.empty()) intersectionSet.insert(0);  // Insert 0 if the intersection is empty
        result.push_back(intersectionSet);

        // Return the vector of sets containing union, difference, and intersection
        return result;
    }
};


//{ Driver Code Starts.
int main(){
    int t;
    cin>>t;
    while(t--){
        int N, M;
        cin>>N>>M;
        set<int> A, B;
        int x;
        for(int i = 0;i < N;i++){
            cin>>x;
            A.insert(x);
        }
        for(int i = 0;i < M;i++){
            cin>>x;
            B.insert(x);
        }
        
        Solution ob;
        vector<set<int>> result = ob.setOperations(A, B);
        for(int i = 0;i < 3;i++){
            for(auto &it: result[i])
                cout<<it<<" ";
            cout<<"\n";
        }
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends