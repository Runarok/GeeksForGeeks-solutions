//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
  public:
    const int MAX  = 100000;

    // array to store long long int primes less than or equal to 10^6 
    vector <int> primes; 

    // utility function for sieve of Sundaram 
    void sieve() { 
        int n = MAX; 
        // In general Sieve of Sundaram, produces primes smaller than (2*x + 2) for a given x.
        // Since we want primes smaller than n, we reduce n to half 
        int nNew = (n) / 2; 

        // This array is used to mark numbers of the form i + j + 2ij from others where 1 <= i <= j
        bool marked[nNew + 100]; 
        memset(marked, false, sizeof(marked)); // Initialize all elements as not marked

        // Main logic of Sundaram: Mark numbers which do not generate prime numbers
        int tmp = sqrt(n); 
        for (int i = 1; i <= (tmp - 1) / 2; i++) 
            for (int j = (i * (i + 1)) << 1; j <= nNew; j = j + 2 * i + 1) 
                marked[j] = true; 

        // Since 2 is a prime number, add it to primes
        primes.push_back(2); 

        // Print other primes. Remaining primes are of the form 2*i + 1 such that marked[i] is false. 
        for (int i = 1; i <= nNew; i++) 
            if (marked[i] == false) 
                primes.push_back(2 * i + 1); 
    }

    // Function to find prime factors of n elements of the given array 
    vector<int> ans;
    void primeLcm(int arr[], int n) { 
        // factors[] array to mark prime factors of LCM of array elements
        int factors[MAX] = {0}; 

        // One by one calculate prime factors of numbers and mark them in factors[] array
        for (int i = 0; i < n; i++) { 
            int copy = arr[i]; 
            int sqr = sqrt(copy); 

            // Check divisibility with prime factors
            for (int j = 0; primes[j] <= sqr; j++) { 
                if (copy % primes[j] == 0) { 
                    // Divide by current prime factor until it can divide the number
                    while (copy % primes[j] == 0) 
                        copy = copy / primes[j]; 

                    // Mark current prime factor as 1 in factors[] array 
                    factors[primes[j]] = 1; 
                } 
            }

            // If remaining value of copy is prime, mark it as a factor
            if (copy > 1) 
                factors[copy] = 1; 
        } 

        // If 2 is prime factor of LCM, add to the result
        if (factors[2] == 1) 
            ans.push_back(2); 

        // Traverse to print remaining prime factors of LCM
        for (int i = 3; i <= MAX; i = i + 2) 
            if (factors[i] == 1) 
                ans.push_back(i); 
    }

    // Function to calculate the prime factors of LCM of elements in the array
    vector<int> primeFactorLcm(int Arr[], int N) {
        sieve(); // Perform the sieve to generate primes
        primeLcm(Arr, N); // Find the prime factors of the LCM
        return ans; // Return the list of prime factors
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
          int Arr[N];
        for(int i=0;i<N;i++)cin>>Arr[i];
        Solution ob;
        vector<int>ans=ob.primeFactorLcm(Arr,N);
        for(int i=0;i<ans.size();i++)cout<<ans[i]<<" ";
        cout<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends