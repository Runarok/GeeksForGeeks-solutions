//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
//User function Template for C++

//User function Template for C++

class Solution
{
    public:
        int chinesePostmanProblem(vector<vector<int>> &e,int n)
        {
            // code here
            
              vector <int> o;
            vector<vector<pair<int,int>>> g(n);
            int s=0;
            for(auto j:e){
                s+=j[2];
                g[j[0]-1].push_back({j[1]-1,j[2]});
                g[j[1]-1].push_back({j[0]-1,j[2]});
            }
            for(int i=0;i<n;i++){
                if(g[i].size()%2)o.push_back(i);
            }
            if(o.size()==0)return s;
            vector <vector<pair<int,int>>> allOddPairs;
            vector<pair<int,int>> t;
            bool vis[o.size()];
            fill(vis,vis+o.size(),false);
            f(o,0,allOddPairs,t,vis);
            vector<vector<int>> shortestPath=floyydWarshalls(g,n);
            int ans=INT_MAX;
            for(auto j:allOddPairs){
                int tans=0;
                for(auto i:j){   
                    if(shortestPath[i.first][i.second]==INT_MAX){
                        tans=INT_MAX;
                        break;
                    }
                    tans+=shortestPath[i.first][i.second];
                }
                ans=min(ans,tans);
            }
            if(ans==INT_MAX)return -1;
            return s+ans;
        }
        
        vector<vector<int>> floyydWarshalls(vector<vector<pair<int,int>>> &g,int n){
    vector<vector<int>> d(n,vector<int> (n,INT_MAX));
    for(int i=0;i<n;i++)d[i][i]=0;
    for(int i=0;i<n;i++){
        for(auto j:g[i])d[i][j.first]=j.second;
    }
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            for(int k=0;k<n;k++){
                if(d[i][k]!=INT_MAX && d[k][j]!=INT_MAX)d[i][j]=min(d[i][j],d[i][k]+d[k][j]);
            }
        }
    }
    return d;
}
void f(vector<int> o,int i,vector<vector<pair<int,int>>> &allOddPairs,vector<pair<int,int>> t,bool v[]){
    if(i==(int)o.size()){
        allOddPairs.push_back(t);
        return;
    }
    if(v[i]){
        f(o,i+1,allOddPairs,t,v);
        return;
    }
    v[i]=1;
    for(int j=0;j<(int)o.size();j++){
        if(v[j]==false){
            v[j]=1;
            t.push_back({o[i],o[j]});
            f(o,i+1,allOddPairs,t,v);
            t.pop_back();
            v[j]=0;
        }
    }
    v[i]=0;
}
};


//{ Driver Code Starts.
int main(){
    int t=1,testcases=1;
    cin>>t;
    while(t>=testcases)
    {
        int n,m;
        cin>>n>>m;
        vector<vector<int>> edges(m,vector<int> (3));
        for(auto &j:edges)
        {
            for(auto &i:j)
                cin>>i;
        }
        Solution s;
        cout<<s.chinesePostmanProblem(edges,n)<<endl;
        testcases++;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends