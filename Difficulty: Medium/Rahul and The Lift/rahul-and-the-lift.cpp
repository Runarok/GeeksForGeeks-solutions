//{ Driver Code Starts

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
public:
  using ll = long long int;

#define SIZE 100100
ll factorial[SIZE], inverseFactorial[SIZE];
ll mod = 1e9 + 7;

// Function to calculate power of a number under modulo
ll power(ll base, ll exponent)
{
    ll result = 1;
    while (exponent) {
        if (exponent % 2)
            result = (result * base) % mod;
        base = (base * base) % mod;
        exponent /= 2;
    }
    return result;
}

// Function to pre-calculate factorials and inverse
// factorials
void preCalculate()
{
    memset(factorial, 0, sizeof(factorial));
    memset(inverseFactorial, 0, sizeof(inverseFactorial));
    factorial[0] = 1;

    // Calculate factorials
    for (int i = 1; i < 100001; ++i)
        factorial[i] = (i * factorial[i - 1]) % mod;

    // Calculate inverse factorials
    inverseFactorial[100000]
        = power(factorial[100000], mod - 2);
    for (int i = 99999; i >= 0; i--)
        inverseFactorial[i]
            = ((i + 1) * inverseFactorial[i + 1]) % mod;
}

// Function to calculate the number of ways M groups of
// people can leave a lift
int noOfWays(int z, int n, int m)
{
    preCalculate();
    // Use the formula to calculate the number of ways
    ll ans
        = (factorial[z + m - 2] * inverseFactorial[z - 2])
          % mod;
    return (int)ans;
}
};


//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		int n, z, m;
		cin >> z >> n >> m;
		Solution obj;
		int ans = obj.noOfWays(z, n, m);
		cout << ans <<"\n";
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends