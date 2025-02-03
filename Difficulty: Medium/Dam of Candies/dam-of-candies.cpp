//{ Driver Code Starts
//Initial Template for C++

#include<bits/stdc++.h> 
using namespace std; 

// } Driver Code Ends
class Solution{
    
public:
    int maxCandy(int height[], int n) { 
         int left = 0;
         int right = n - 1;
         int maxLength = 0;
         
         // Use two pointers to find the maximum area
         while (left < right) {
             int heightDifference = right - left - 1;  // height of the container
             int width = min(height[left], height[right]);  // width of the container
             int currentLength = heightDifference * width;  // area of the container
             maxLength = max(currentLength, maxLength);  // update the maximum area
             
             // Move the pointer of the shorter wall to maximize area
             if (height[left] < height[right]) {
                 left++;
             } else {
                 right--;
             }
         }
         
         return maxLength;  // return the maximum area found
    }   
};


//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--)
    {
    	int n;
    	cin>>n;
    	int height[n];
    	for (int i = 0; i < n; ++i)
    	{
    		cin>>height[i];
    	}
    	
    	Solution obj;
    	
    	cout << obj.maxCandy(height,n)<<"\n";
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends