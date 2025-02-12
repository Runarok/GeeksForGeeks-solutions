from collections import Counter

class Solution:
    def maximizeSum(self, arr, n):
        # Count the frequency of each element in the array
        d = Counter(arr)
        cnt = 0
        
        # Sort the keys in descending order
        l = sorted(d.keys(), reverse=True)
        
        # Traverse through the sorted elements
        for i in l:
            if d[i] != 0:  # If there are occurrences of the current element
                cnt += (i * d[i])  # Add the product of element and its frequency to the total count
                
                # If the next lower element exists, reduce its count
                if i - 1 in d:
                    m = min(d[i], d[i - 1])
                    d[i - 1] -= m  # Decrease the count of the next lower element
                    if d[i - 1] == 0:
                        del d[i - 1]  # Remove it if its count is 0
        
        # Return the final result
        return cnt
#{ 
 # Driver Code Starts
#Initial Template for Python 3


for _ in range(0,int(input())):
    n = int(input())
    arr = list(map(int, input().strip().split()))
    arr.sort()
    ob=Solution()
    
    ans = ob.maximizeSum(arr, n)
    print(ans)

    





    print("~")
# } Driver Code Ends