class Solution:
    def longestCommonPrefix(self, arr):
        if not arr:
            return ""
        
        prefix = arr[0]
        
        for string in arr[1:]:
            while not string.startswith(prefix):
                prefix = prefix[:-1]
                if not prefix:
                    return ""
        
        return prefix

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())

    for _ in range(t):
        arr = [x for x in input().strip().split(" ")]

        ob = Solution()
        ans = ob.longestCommonPrefix(arr)

        if not ans:
            print("\"\"")
        else:
            print(ans)

# } Driver Code Ends