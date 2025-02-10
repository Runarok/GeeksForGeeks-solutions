from typing import List

class Solution:
    def solve(self, N: int, K: int, arr: List[int]) -> int:
        """
        Function to find the maximum possible GCD such that the array can be partitioned 
        into at least K subarrays where each subarray's sum is divisible by this GCD.
        
        :param N: Number of elements in the array
        :param K: Required number of partitions
        :param arr: List of integers representing the array
        :return: Maximum possible GCD satisfying the given condition
        """

        def is_valid_gcd(G):
            """
            Checks if the given GCD G allows partitioning the array into at least K subarrays
            where each subarray sum is divisible by G.

            :param G: Candidate GCD to check
            :return: True if it's a valid GCD, otherwise False
            """
            current_sum = 0
            partition_count = 0

            for num in arr:
                current_sum += num
                if current_sum % G == 0:
                    partition_count += 1
                    current_sum = 0

            return partition_count >= K

        # Compute total sum of the array
        total_sum = sum(arr)

        # Find all divisors of the total sum
        divisors = []
        for i in range(1, int(total_sum ** 0.5) + 1):
            if total_sum % i == 0:
                divisors.append(i)
                if i != total_sum // i:
                    divisors.append(total_sum // i)

        # Sort divisors in descending order to check the largest possible GCD first
        divisors.sort(reverse=True)

        # Iterate over divisors to find the largest valid GCD
        for G in divisors:
            if is_valid_gcd(G):
                return G

        # Default case, return 1 if no valid GCD is found
        return 1

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
        
        N = int(input())
        
        
        K = int(input())
        
        
        arr=IntArray().Input(N)
        
        obj = Solution()
        res = obj.solve(N, K, arr)
        
        print(res)
        

        print("~")
# } Driver Code Ends