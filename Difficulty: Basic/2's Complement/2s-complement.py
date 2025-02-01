class Solution:
    def complement(self, str):
        # get length
        n = len(str)
        
        # if all values are '0'
        if all(bits == '0' for bits in str):
            return str
        
        # find '1' from the last end
        i = n - 1
        while i >= 0:
            if str[i] == '1':
                break
            i -= 1
        
        # for bits before the last found '1', flip the numbers
        for k in range(i - 1, -1, -1):
            if str[k] == '0':
                str = str[:k] + '1' + str[k + 1:]
            else:
                str = str[:k] + '0' + str[k + 1:]
        
        return str

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        bi = input()
        
        ob = Solution()
        print(ob.complement(bi))
# } Driver Code Ends