#User function Template for python3

class Solution:
    def uniquePerms(self, arr, n):
        # Sort the array to facilitate lexicographical order
        arr.sort()
        result = []
        
        # Helper function to generate permutations
        def backtrack(path, used):
            # If the length of the path is n, we have a complete permutation
            if len(path) == n:
                result.append(path[:])  # Append a copy of path
                return
            
            # Try to use each element in arr
            for i in range(n):
                # Skip used elements or duplicate elements in the same position
                if used[i] or (i > 0 and arr[i] == arr[i - 1] and not used[i - 1]):
                    continue
                
                used[i] = True  # Mark element as used
                path.append(arr[i])  # Add element to the current path
                
                # Recurse to form the next part of the permutation
                backtrack(path, used)
                
                # Backtrack: remove the last element and mark as unused
                path.pop()
                used[i] = False
        
        # Call backtrack with an empty path and a used array to track the usage of elements
        used = [False] * n
        backtrack([], used)
        
        # Sort the result list to ensure lexicographical order
        return result


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        n=int(input())
        arr=list(map(int,input().split()))
        
        ob = Solution()
        res = ob.uniquePerms(arr,n)
        for i in range(len(res)):
            for j in range(n):
                print(res[i][j],end=" ")
            print()
        print("~")
# } Driver Code Ends