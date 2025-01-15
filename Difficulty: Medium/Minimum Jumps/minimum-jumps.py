#User function Template for python3
class Solution:
    def minJumps(self, arr):
        n = len(arr)
        if n <= 1:
            return 0
        
        if arr[0] == 0:
            return -1
        
        # Initialize variables to store the number of jumps, the farthest index we can reach, and the end of the current jump range
        jumps = 1
        max_reach = arr[0]
        steps = arr[0]
        
        # Loop through the array to calculate the minimum number of jumps
        for i in range(1, n):
            if i == n - 1:
                return jumps
            
            # Update the farthest point we can reach from the current position
            max_reach = max(max_reach, i + arr[i])
            steps -= 1
            
            if steps == 0:
                jumps += 1
                if i >= max_reach:
                    return -1
                steps = max_reach - i
        
        return -1


#{ 
 # Driver Code Starts
#Initial Template for Python 3
if __name__ == '__main__':
    T = int(input())
    for i in range(T):
        # n = int(input())
        Arr = [int(x) for x in input().split()]
        ob = Solution()
        ans = ob.minJumps(Arr)
        print(ans)
        print("~")
# } Driver Code Ends
