//{ Driver Code Starts


#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    int getAvg(int N, int arr[]) {
        // Create an unordered set to store Fibonacci numbers
        unordered_set<int> fibonaccis;
        fibonaccis.insert(0); // 0 is a Fibonacci number
        fibonaccis.insert(1); // 1 is a Fibonacci number
        
        // Initialize the first two Fibonacci numbers
        int secondLastFibonacci = 0;
        int lastFibonacci = 1;
        
        // Generate Fibonacci numbers less than N and insert them into the set
        while (lastFibonacci < N) {
            int newFibonacci = lastFibonacci + secondLastFibonacci;
            fibonaccis.insert(newFibonacci);
            secondLastFibonacci = lastFibonacci;
            lastFibonacci = newFibonacci;
        }
        
        // Iterate through the array and modify elements at Fibonacci indices
        for (int i = 1; i <= N; i++) {
            int idx = i;
            if (fibonaccis.count(idx) > 0) { // If index is a Fibonacci number
                int val = arr[i] * idx;
                if (val > 100) val %= 100; // Keep the value within 2 digits
                arr[i] = val; // Update the value in the array
            }
        }
        
        // Calculate the sum of the updated array
        int sum = 0;
        for (int i = 1; i <= N; i++) {
            sum += arr[i];
        }
        
        // Return the average (integer division)
        return sum / N;
    }
};



//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int N;
        
        cin>>N;
        int arr[N+1];
        for(int i=1; i<=N; i++)
            cin>>arr[i];

        Solution ob;
        cout << ob.getAvg(N,arr) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends