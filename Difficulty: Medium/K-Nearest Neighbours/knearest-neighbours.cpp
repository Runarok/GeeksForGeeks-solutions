//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

struct Point
{
	int grp;
	double x, y;
	double distance; 
};

/*
A utility structure to store the info of points
x and y represents the 2D coordinates of the points
grp represents to which particular point belongs
struct Point
{
	int grp;
	double x, y;
	double distance; 
};
*/
// function should return to which grp 
// the test data will belong
int classifyAPoint(Point arr[], int n, int k, Point test);

// Driver code
int main()
{
	int t;
	cin>>t;
	while(t--)
	{
	    int n, k;
	    cin>>n;
	    Point arr[n], test;
	    for(int i=0; i<n ; i++)
	        cin>>arr[i].x>>arr[i].y>>arr[i].grp;
	   cin>>test.x>>test.y>>k;
	   cout<<classifyAPoint(arr, n, k, test)<<endl;
	
cout << "~" << "\n";
}
	return 0;
}

// } Driver Code Ends


/*
A utility structure to store the info of points
x and y represents the 2D coordinates of the points
grp represents to which particular point belongs
struct Point
{
	int grp;
	double x, y;
	double distance; 
};
*/
// function should return to which grp 
// the test data will belong


// Function to compute the Euclidean distance between two points
double EuclideanDistance(const Point& p1, const Point& p2) {
    return sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y));
}

// Function to classify the test point based on k-nearest neighbors
int classifyAPoint(Point arr[], int n, int k, Point test) {
    // Array to store the distance and corresponding group of each point
    std::pair<double, int> distances[n];

    // Calculate distance of each point in arr from the test point
    for (int i = 0; i < n; i++) {
        double distance = EuclideanDistance(arr[i], test);
        distances[i] = {distance, arr[i].grp};
    }

    // Sort the points by distance to the test point
    std::sort(distances, distances + n,
        [](const std::pair<double, int>& p1, const std::pair<double, int>& p2) {
            return p1.first < p2.first;  // Sort by the distance
        });

    // Array to store the group labels of the k-nearest neighbors
    int nearest_neighbors[k];
    for (int i = 0; i < k; i++) {
        nearest_neighbors[i] = distances[i].second;
    }

    // Determine the majority class among the k nearest neighbors
    int majority_class = -1;
    int max_count = 0;

    for (int i = 0; i < k; i++) {
        int count = 0;
        for (int j = 0; j < k; j++) {
            if (nearest_neighbors[j] == nearest_neighbors[i]) {
                count++;
            }
        }

        // Update majority class if current count is higher than max_count
        if (count > max_count) {
            majority_class = nearest_neighbors[i];
            max_count = count;
        }
    }

    return majority_class;  // Return the majority class label
}

