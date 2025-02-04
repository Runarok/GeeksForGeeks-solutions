from typing import List

class Solution:
    def win(self, n: int, power: List[int], q: int, Q: List[int]) -> List[List[int]]:
        # Sort the power array to enable efficient binary search
        power = sorted(power)
        
        # Helper function to find the lower bound index of the given value x in the sorted power array
        def lowerBound(x):
            ans = -1
            i = 0
            j = n - 1
            while i <= j:
                mid = (i + j) // 2
                if power[mid] <= x:
                    ans = mid  # Update the answer if the current value is smaller or equal to x
                    i = mid + 1  # Move right to find a larger or equal value
                else:
                    j = mid - 1  # Move left if the value at mid is larger than x
            return ans
        
        # Initialize the prefix sum array where each element at index i contains the sum of power[0] to power[i]
        prefixSum = [0] * n
        prefixSum[0] = power[0]
        for i in range(1, n):
            prefixSum[i] = prefixSum[i - 1] + power[i]
        
        # List to store the results for each query in Q
        ans = []
        
        # Process each query in Q
        for i in Q:
            lowerbound = lowerBound(i)  # Find the index of the largest power <= i
            if lowerbound == -1:
                ans.append((0, 0))  # No valid power found, append (0, 0)
            else:
                # Append the result (index + 1, prefix sum of the found lower bound)
                ans.append((lowerbound + 1, prefixSum[lowerbound]))
        
        return ans

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



class IntMatrix:
    def __init__(self) -> None:
        pass
    def Input(self,n,m):
        matrix=[]
        #matrix input
        for _ in range(n):
            matrix.append([int(i) for i in input().strip().split()])
        return matrix
    def Print(self,arr):
        for i in arr:
            for j in i:
                print(j,end=" ")
            print()


if __name__=="__main__":
    t = int(input())
    for _ in range(t):
        
        n = int(input())
        
        
        power=IntArray().Input(n)
        
        
        q = int(input())
        
        
        Q=IntArray().Input(q)
        
        obj = Solution()
        res = obj.win(n, power, q, Q)
        
        IntMatrix().Print(res)
        

# } Driver Code Ends