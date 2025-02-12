# User function Template for Python3

class Solution:
    def totalJumps(self, X, Y, N, arr):
        """
        Calculates the total number of jumps required to clear all obstacles.

        :param X: Maximum height that can be cleared in one jump.
        :param Y: Height the character slides down after each jump.
        :param N: Number of obstacles.
        :param arr: List of obstacle heights.
        :return: Total number of jumps needed.
        """
        total_jumps = 0
        
        for height in arr:
            if height <= X:
                # If the obstacle can be cleared in one jump
                total_jumps += 1
            else:
                # Remaining height to be cleared after the first jump
                remaining_height = height - X
                # Effective height cleared in each subsequent jump
                effective_climb = X - Y
                
                if effective_climb > 0:
                    # Number of additional jumps required
                    additional_jumps = (remaining_height + effective_climb - 1) // effective_climb
                    total_jumps += 1 + additional_jumps  # Include the first jump
                else:
                    # If effective climb is zero or negative, the obstacle cannot be cleared
                    return -1

        return total_jumps
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        X, Y, N = [int(x) for x in input().split()]
        arr = input().split()
        for i in range(N):
            arr[i] = int(arr[i])
        
        ob = Solution()
        print(ob.totalJumps(X, Y, N, arr))
# } Driver Code Ends