//{ Driver Code Starts
// Program to find the maximum profit job sequence from a given array 
// of jobs with deadlines and profits 
#include<bits/stdc++.h>
using namespace std; 

// A structure to represent a job 
struct Job 
{ 
    int id;	 // Job Id 
    int dead; // Deadline of job 
    int profit; // Profit if job is over before or on deadline 
}; 


// } Driver Code Ends


/* 
   Structure to represent a Job
   Each job has an ID, a deadline, and a profit if the job is completed before or on the deadline.

struct Job 
{ 
    int id;    // Job ID 
    int dead;  // Deadline of the job 
    int profit; // Profit if the job is completed before or on its deadline 
};

*/

class Solution 
{
    public:
    // Comparator function to sort jobs in descending order of profit
    static int compareProfit(Job a, Job b) {
        return a.profit > b.profit; // Return true if profit of a is greater than b
    }
    
    // Function to schedule jobs in such a way that the profit is maximized
    vector<int> JobScheduling(Job jobs[], int n) 
    { 
        int totalProfit = 0;  // To store the total profit from the scheduled jobs
        int totalJobs = 0;    // To store the count of jobs that are scheduled

        // Sort jobs in descending order of profit using the comparator
        sort(jobs, jobs + n, compareProfit);

        int jobResult[n];     // Array to store the job ID assigned to each slot
        int slots[n] = {0};   // Array to track if a time slot is occupied (1 = occupied, 0 = free)

        // Iterate through each job to assign it to an available time slot
        for(int i = 0; i < n; i++) {
            // Try to find the latest available slot before the job's deadline
            for(int j = jobs[i].dead - 1; j >= 0; j--) {
                if(slots[j] == 0) { // If slot is free
                    jobResult[j] = i; // Assign the job to the current slot
                    slots[j] = 1;      // Mark the slot as occupied
                    break;             // Move to the next job
                }
            }
        }

        // Calculate the total number of jobs scheduled and the total profit
        for(int i = 0; i < n; i++) {
            if(slots[i]) {  // If the slot is occupied
                totalJobs++;               // Increment the count of jobs scheduled
                totalProfit += jobs[jobResult[i]].profit; // Add the profit from the scheduled job
            }
        }

        // Return the total number of jobs scheduled and the total profit
        vector<int> result;
        result.push_back(totalJobs);  // Number of jobs scheduled
        result.push_back(totalProfit); // Total profit earned from scheduled jobs

        return result;
    } 
};


//{ Driver Code Starts.
// Driver program to test methods 
int main() 
{ 
    int t;
    //testcases
    cin >> t;
    
    while(t--){
        int n;
        
        //size of array
        cin >> n;
        Job arr[n];
        
        //adding id, deadline, profit
        for(int i = 0;i<n;i++){
                int x, y, z;
                cin >> x >> y >> z;
                arr[i].id = x;
                arr[i].dead = y;
                arr[i].profit = z;
        }
        Solution ob;
        //function call
        vector<int> ans = ob.JobScheduling(arr, n);
        cout<<ans[0]<<" "<<ans[1]<<endl;
    
cout << "~" << "\n";
}
	return 0; 
}



// } Driver Code Ends