//{ Driver Code Starts
/* Driver program to test above function */

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends
//User function Template for C++
class Solution{
    public:
    // Comparison function to sort by arrival time, and in case of a tie, by burst time
    static bool cmpr(pair<int, int> a, pair<int, int> b) {
        if (a.first != b.first) {
            return a.first < b.first;
        }
        return a.second < b.second;
    }

    vector<double> averageTimes(vector<int> arrivalTime, vector<int> burstTime, int n) {
        // Create a vector of pairs where first element is arrival time and second is burst time
        vector<pair<int, int>> v;
        for (int i = 0; i < n; i++) {
            v.push_back({arrivalTime[i], burstTime[i]});
        }

        // Sort based on arrival time, and for ties, by burst time
        sort(v.begin(), v.end(), cmpr);

        vector<bool> vis(n, false); // To mark visited processes
        int tt = 0;   // Current time
        int tatt = 0; // Total turnaround time
        int wt = 0;   // Total waiting time

        // Process all jobs
        for (int completed = 0; completed < n; completed++) {
            int in = -1;
            int mini = INT_MAX;

            // Find the process with the smallest burst time that has arrived
            for (int j = 0; j < n; j++) {
                if (!vis[j] && v[j].first <= tt && v[j].second < mini) {
                    in = j;
                    mini = v[j].second;
                }
            }

            // If no process is ready, move time to the next arrival time
            if (in == -1) {
                for (int j = 0; j < n; j++) {
                    if (!vis[j]) {
                        in = j;
                        tt = v[j].first;
                        break;
                    }
                }
            }

            // Mark the selected process as visited
            vis[in] = true;
            tt += v[in].second; // Increment current time by burst time
            tatt += (tt - v[in].first); // Add turnaround time
            wt += (tt - v[in].first - v[in].second); // Add waiting time
        }

        // Calculate average turnaround and waiting times
        double avgTurnaroundTime = static_cast<double>(tatt) / n;
        double avgWaitingTime = static_cast<double>(wt) / n;

        // Round to two decimal places
        avgTurnaroundTime = round(avgTurnaroundTime * 100) / 100.0;
        avgWaitingTime = round(avgWaitingTime * 100) / 100.0;

        // Return the results as a vector
        return {avgWaitingTime, avgTurnaroundTime};
    }
};



//{ Driver Code Starts.
int main()
{
	int t;
	cin>>t;
	while(t--)
	{
	    int n;
	    cin >> n;
	    vector<int>arrivalTime(n), burstTime(n);
	    for(int i = 0 ; i < n; i++){
	        cin >> arrivalTime[i];
	    }
	    for(int i = 0 ; i < n; i++){
	        cin >> burstTime[i];
	    }
	    Solution ob;
	    vector<double> ans = ob.averageTimes(arrivalTime, burstTime, n);
	    for(auto it : ans){
	        cout << it <<" ";
	    }
	    cout << endl;
	
cout << "~" << "\n";
}
	return 0;
}

// } Driver Code Ends