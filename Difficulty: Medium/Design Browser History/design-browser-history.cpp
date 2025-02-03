//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
//User function Template for C++

class BrowserHistory {
public:
    // constructor to initialize object with homepage
    vector<string> ans;
    int j = 0;
    
    // Constructor initializes with the homepage
    BrowserHistory(string homepage) {
        ans.push_back(homepage);
    }
    
    // Visit the current URL
    void visit(string url) {
        // Remove any forward history before adding the new URL
        ans.resize(j + 1);
        ans.push_back(url);
        j = ans.size() - 1;
    }
    
    // Move backward 'steps' in history and return the current page
    string back(int steps) {
        // Ensure we do not move backward past the start of the history
        j = max(0, j - steps);
        return ans[j];
    }
    
    // Move forward 'steps' in history and return the current page
    string forward(int steps) {
        // Ensure we do not move forward past the end of the history
        j = min(j + steps, (int)ans.size() - 1);
        return ans[j];
    }
};


//{ Driver Code Starts.

int main()
{
    string homepage;
    cin >> homepage;
    
    BrowserHistory obj(homepage);
    
    int total_queries;
    cin >> total_queries;
    while(total_queries--)
    {
        int query;
        cin >> query;
        
        // if query = 1, visit()
        // if query = 2, back()
        // if query = 3, forward()
        
        if(query == 1) {
            string url;
            cin >> url;
            obj.visit(url);
        }
        else if(query == 2) {
            int steps;
            cin >> steps;
            cout << obj.back(steps) << endl;
        }
        else {
            int steps;
            cin >> steps;
            cout << obj.forward(steps) << endl;
        }
    }
    return 0;
}
// } Driver Code Ends