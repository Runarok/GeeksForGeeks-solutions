class Solution:
    def indexes(self, v, x):
        # Find first occurrence
        first = -1
        last = -1
        n = len(v)
        
        # Iterate to find the first and last occurrence
        for i in range(n):
            if v[i] == x:
                if first == -1:
                    first = i
                last = i
        
        return [first, last]



#{ 
 # Driver Code Starts
#Initial Template for Python 3

def main():

    T = int(input())

    while(T > 0):
        n = int(input())
        a = [int(x) for x in input().strip().split()]
        k = int(input())
        obj = Solution()
        ans = obj.indexes(a, k)
        if ans[0]==-1 and ans[1]==-1:
            print(-1)
        else:
            print(ans[0], end=' ')
            print(ans[1])

        T -= 1


        print("~")
if __name__ == "__main__":
    main()


# } Driver Code Ends
