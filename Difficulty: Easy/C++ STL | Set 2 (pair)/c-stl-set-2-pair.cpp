//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

void add_pair(vector<pair<string,pair<int,int> > > &A,string str,int x,int y);
int get_size(vector<pair<string,pair<int,int> > > &A);
void print_values(vector<pair<string,pair<int,int> > > &A);
void sort_pair(vector<pair<string,pair<int,int> > > &A);

int main() {
	// your code goes here
	int t;
	cin>>t;
	while(t--)
	{
		vector<pair<string,pair<int,int> > > A;
		int q;
		cin>>q;
		while(q--)
		{
			char c;
			cin>>c;
			if(c=='a')
			{
				string name;
				cin>>name;
				int x,y;
				cin>>x>>y;
				add_pair(A,name,x,y);
			}
			if(c=='b')
			{
				cout<<get_size(A)<<" ";
			}
			if(c=='c')
			{
				print_values(A);
			}
			if(c=='d')
			{
			 	sort_pair(A);
			}
		
		
		}
cout<<endl;
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends

/* Inserts a pair <string, pair<x, y>> into the vector A */
void add_pair(vector<pair<string,pair<int,int>>> &A, string str, int x, int y)
{
    // Add the pair consisting of a string and a pair of integers (x, y) to the vector
    A.push_back({str, {x, y}});
}

/* Returns the size of the vector A */
int get_size(vector<pair<string,pair<int,int>>> &A)
{
    // Return the number of elements in the vector A
    return A.size();
}

/* Prints space-separated values of vector A */
void print_values(vector<pair<string,pair<int,int>>> &A)
{
    // Iterate through each element in the vector A and print its contents
    for (auto i : A) {
        cout << i.first << " " << i.second.first << " " << i.second.second << " ";
    }
}

/* Sorts the vector A based on values x and y */
void sort_pair(vector<pair<string,pair<int,int>>> &A)
{
    // Sort the vector based on the pair values (x, y)
    sort(A.begin(), A.end(), [](pair<string, pair<int, int>> &p1, pair<string, pair<int, int>> &p2) {
        // Compare based on the pair of integers (x, y)
        return p1.second < p2.second;
    });
}
