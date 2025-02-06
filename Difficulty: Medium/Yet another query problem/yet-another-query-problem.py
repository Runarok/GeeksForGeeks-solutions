from typing import List

class Solution:
    def solveQueries(self, N: int, num: int, A: List[int], Q: List[List[int]]) -> List[int]:
        max_k = N  # Maximum possible frequency of any element
        answers = [[0] * (max_k + 1) for _ in range(N)]  # 2D list to store answers
        freq_map = {}  # Map to store the frequency of each element as we traverse
        
        # Traverse the array from the end to the start
        for i in range(N - 1, -1, -1):
            freq_map[A[i]] = freq_map.get(A[i], 0) + 1  # Increment the frequency of current element
            
            # Update the frequency count for each value of k
            for k in range(1, max_k + 1):
                answers[i][k] = answers[i + 1][k] if i + 1 < N else 0  # Carry over the previous count
                if freq_map[A[i]] == k:  # If current element frequency matches k, increment the count
                    answers[i][k] += 1
        
        result = []  # List to store the result for each query
        
        # Process each query
        for L, R, K in Q:
            # Calculate the difference in counts between the range [L, R]
            result.append(answers[L][K] - (answers[R + 1][K] if R + 1 < N else 0))
        
        return result  # Return the result for all queries
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
        
        N = int(input())
        
        
        num = int(input())
        
        
        A=IntArray().Input(N)
        
        
        Q=IntMatrix().Input(num, 3)
        
        obj = Solution()
        res = obj.solveQueries(N, num, A, Q)
        
        IntArray().Print(res)
        

        print("~")
# } Driver Code Ends