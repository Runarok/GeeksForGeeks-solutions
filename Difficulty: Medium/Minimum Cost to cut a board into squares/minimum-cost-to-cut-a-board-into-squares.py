from typing import List

class Solution:
    def minimumCostOfBreaking(self, X: List[int], Y: List[int], M: int, N: int) -> int:
        # Sort the X and Y lists in descending order to break the largest pieces first
        X = sorted(X, reverse=True)
        Y = sorted(Y, reverse=True)
        
        # Initialize result to store the total cost
        res = 0
        
        # Get the lengths of the X and Y lists
        n, m = len(X), len(Y)
        
        # Initialize pointers for both lists (X and Y)
        i, j = 0, 0
        
        # Initialize horizontal and vertical cuts counters
        hc, vc = 1, 1
        
        # Loop through both lists while there are elements in both
        while i < n and j < m:
            # Choose the larger value between X[i] and Y[j]
            if X[i] >= Y[j]:
                # Add cost based on horizontal cut (hc) and value X[i]
                res += (X[i] * hc)
                # Increment the vertical cut counter
                vc += 1
                # Move to the next X element
                i += 1
            else:
                # Add cost based on vertical cut (vc) and value Y[j]
                res += (Y[j] * vc)
                # Increment the horizontal cut counter
                hc += 1
                # Move to the next Y element
                j += 1
        
        # If there are remaining elements in X, process them
        while i < n:
            res += (X[i] * hc)
            vc += 1
            i += 1
        
        # If there are remaining elements in Y, process them
        while j < m:
            res += (Y[j] * vc)
            hc += 1
            j += 1
        
        # Return the total cost calculated
        return res


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
        
        a=IntArray().Input(2)
        m = a[0]
        n = a[1]
        
        tmp=IntArray().Input(a[0]-1) + IntArray().Input(a[1]-1)
        X = tmp[:m-1]
        Y = tmp[m-1:]
        
        obj = Solution()
        res = obj.minimumCostOfBreaking(X, Y,m,n)
        
        print(res)
        

        print("~")
# } Driver Code Ends