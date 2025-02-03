from collections import defaultdict

class Solution:
    def checkMirrorTree(self, n, e, A, B):
        # Initialize adjacency lists for both trees
        adj1 = defaultdict(list)
        adj2 = defaultdict(list)
        
        # Populate adjacency lists with edges from arrays A and B
        for i in range(0, 2 * e, 2):
            adj1[A[i]].append(A[i + 1])
            adj2[B[i]].append(B[i + 1])
        
        # Compare the adjacency lists in reverse order for each key
        for key in adj1:
            if adj1[key][::-1] != adj2[key]:
                return "0"  # Return "0" if trees are not mirrors of each other
        return "1"  # Return "1" if trees are mirrors of each other

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        n,e=map(int,input().split())
        
        A=list(map(int,input().split()))
        B=list(map(int,input().split()))
        
        ob = Solution()
        print(ob.checkMirrorTree(n,e,A,B))
        print("~")
# } Driver Code Ends