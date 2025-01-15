#User function Template for python3

class Solution:
    def splitArray(self, arr, N, K):
        def is_valid(mid):
            subarrays, current_sum = 1, 0
            for num in arr:
                if current_sum + num > mid:
                    subarrays += 1
                    current_sum = num
                    if subarrays > K:
                        return False
                else:
                    current_sum += num
            return True
        
        # Edge case: If more subarrays are requested than there are elements,
        # the largest sum must be at least the largest element.
        if K > N:
            return max(arr)
        
        # Binary search for the minimal largest sum
        left, right = max(arr), sum(arr)
        result = right
        
        while left <= right:
            mid = (left + right) // 2
            if is_valid(mid):
                result = mid
                right = mid - 1
            else:
                left = mid + 1
        
        return result



#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        N,K=map(int,input().split())
        arr=list(map(int,input().split()))
        
        ob = Solution()
        print(ob.splitArray(arr,N,K))
        print("~")
# } Driver Code Ends