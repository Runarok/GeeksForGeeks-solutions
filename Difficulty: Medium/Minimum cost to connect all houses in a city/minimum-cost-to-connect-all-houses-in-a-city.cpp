//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>

using namespace std;

// Union-Find (Disjoint Set Union) class to help in cycle detection
class UnionFind {
public:
    vector<int> parent, rank;
    
    UnionFind(int n) {
        parent.resize(n);
        rank.resize(n, 0);
        for (int i = 0; i < n; ++i) {
            parent[i] = i;
        }
    }
    
    int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }
    
    void unite(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);
        
        if (rootX != rootY) {
            if (rank[rootX] > rank[rootY]) {
                parent[rootY] = rootX;
            } else if (rank[rootX] < rank[rootY]) {
                parent[rootX] = rootY;
            } else {
                parent[rootY] = rootX;
                rank[rootX]++;
            }
        }
    }
};

// Function to compute the Manhattan distance between two points
int manhattanDistance(vector<int>& p1, vector<int>& p2) {
    return abs(p1[0] - p2[0]) + abs(p1[1] - p2[1]);
}

// Main function to find the minimum cost to connect all houses
class Solution {
public:
    int minCostCity(vector<vector<int>>& houses, int n) {
        // Step 1: Create a list of all edges with their Manhattan distances
        vector<pair<int, pair<int, int>>> edges;  // {cost, {house1, house2}}
        
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                int cost = manhattanDistance(houses[i], houses[j]);
                edges.push_back({cost, {i, j}});
            }
        }
        
        // Step 2: Sort the edges by cost (Manhattan distance)
        sort(edges.begin(), edges.end());
        
        // Step 3: Initialize Union-Find data structure
        UnionFind uf(n);
        
        int minCost = 0;
        
        // Step 4: Add edges to the MST using Kruskal's algorithm
        for (const auto& edge : edges) {
            int cost = edge.first;
            int house1 = edge.second.first;
            int house2 = edge.second.second;
            
            // If the houses are in different components, connect them
            if (uf.find(house1) != uf.find(house2)) {
                uf.unite(house1, house2);
                minCost += cost;
            }
        }
        
        return minCost;
    }
};
//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int n, m;
        cin >> n;
        vector<vector<int>> edges;

        for (int i = 0; i < n; ++i) {
            vector<int> temp;
            for (int j = 0; j < 2; ++j) {
                int x;
                cin >> x;
                temp.push_back(x);
            }
            edges.push_back(temp);
        }

        Solution obj;

        cout << obj.minCostCity(edges, n);
        cout << "\n";
        cout << "~" << endl;
    }
}

// } Driver Code Ends