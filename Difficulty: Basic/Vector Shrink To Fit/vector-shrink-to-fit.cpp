//{ Driver Code Starts
//Initial Template for C++

// vector::shrink_to_fit
#include <iostream>
#include <vector>

using namespace std;


// } Driver Code Ends

// User function Template for C++

// Complete the function
void ShrinkMe(vector<int> myvector, int newsize) {

    // Print the initial capacity of the vector
    cout << myvector.capacity() << endl;

    // Resize the vector to the new size
    myvector.resize(newsize);

    // Shrink the vector's capacity to fit its size
    myvector.shrink_to_fit();

    // Print the updated capacity of the vector
    cout << myvector.capacity();
}



//{ Driver Code Starts.

int main ()
{
    int t;
    cin>>t;

    while(t--){

        int size;
        cin>>size;

        int newsize;
        cin>>newsize;

        vector<int> myvector(size);

        ShrinkMe(myvector, newsize);
        cout<<endl;
    
    
cout << "~" << "\n";
}

  return 0;
}

// } Driver Code Ends