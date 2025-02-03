from typing import List
from bisect import bisect_left, bisect_right

class Solution:
    def smallerSum(self, n: int, arr: List[int]) -> List[int]:
        tmp = []  # Temporary list to store sorted values of arr
        pre = []  # List to store the prefix sum of sorted array
        ans = []  # List to store the result

        # Copy elements from arr to tmp
        for i in range(n):
            tmp.append(arr[i])
        
        # Sort the tmp list
        tmp.sort()
        
        # Create the prefix sum of the sorted array
        pre = tmp[:]
        for i in range(1, n):
            pre[i] += pre[i - 1]
        
        # For each element in arr, find the sum of all smaller elements
        for i in range(n):
            lb = bisect_left(tmp, arr[i])  # Find the position of arr[i] in the sorted list
            if lb == 0:
                ans.append(0)  # No smaller element
            else:
                ans.append(pre[lb - 1])  # Sum of all elements smaller than arr[i]

        return ans  # Return the result list
#{ 
 # Driver Code Starts
class IntArray:
    def __init__(self) -> None:
        pass
    def Input(self,n):
        arr=[int(i) for i in input().strip().split()]#array input
        return arr
    def Print(self,arr):
        for i in arr:
            print(i,end=" ")
        print()


if __name__=="__main__":
    t = int(input())
    for _ in range(t):
        
        n = int(input())
        
        
        arr=IntArray().Input(n)
        
        obj = Solution()
        res = obj.smallerSum(n, arr)
        
        IntArray().Print(res)
        

        print("~")
# } Driver Code Ends