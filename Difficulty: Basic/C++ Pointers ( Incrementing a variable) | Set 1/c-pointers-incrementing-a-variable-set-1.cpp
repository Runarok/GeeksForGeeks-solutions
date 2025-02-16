//{ Driver Code Starts
#include<iostream>
using namespace std;
void updateVar(int *a);

int main()
{
    int t;
    cin>>t;
    while(t--)
    {   int a;
        cin>>a;
        updateVar(&a);
        cout<<a<<"\n";
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends


/* This function is invoked by passing the address of the variable.
   It increments the value stored in the variable by 10 */

/* Complete the function below */

void updateVar(int *a)
{
    // Dereferencing the pointer to update the value
    *a += 10;
}
