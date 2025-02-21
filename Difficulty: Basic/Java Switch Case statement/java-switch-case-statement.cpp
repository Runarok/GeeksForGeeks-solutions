//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;


class Array
{
public:
    template <class T>
    static void input(vector<T> &A,int n)
    {
        for (int i = 0; i < n; i++)
        {
            scanf("%lf ",&A[i]);
        }
    }

    template <class T>
    static void print(vector<T> &A)
    {
        cout<<setprecision(3)<<fixed;
        for (int i = 0; i < A.size(); i++)
        {
            cout << A[i]<< " ";
        }
        cout << endl;
    }
};


// } Driver Code Ends

class Solution {
  public:
    // Function to perform an operation based on the choice provided
    double switchCase(int choice, vector<double> &arr) {
        // Use a switch-case structure to handle different operations
        switch (choice) {
            // Case 1: Calculate the area of a circle (π * r^2)
            case 1:
                return 3.14159 * arr[0] * arr[0];  // Area of circle
                break;
                
            // Case 2: Calculate the area of a rectangle (length * breadth)
            case 2:
                return arr[0] * arr[1];  // Area of rectangle
                break;
        }
        // Return 0 in case of an invalid choice, though this will never be reached due to the lack of a default case
        return 0.0;
    }
};



//{ Driver Code Starts.

int main(){
    int t;
    scanf("%d ",&t);
    while(t--){
        
        int choice;
        scanf("%d",&choice);
        
        
        vector<double> arr(choice);
        Array::input(arr,choice);
        
        Solution obj;
        double res = obj.switchCase(choice, arr);
        // cout<<fixed<<endl;
        if(res == int(res)){
            cout<<int(res)<<endl;
            continue;
        }
        cout<<setprecision(2)<<fixed;
        // 
        // }else{
            cout<<res<<endl;
        // }
        
    }
}

// } Driver Code Ends