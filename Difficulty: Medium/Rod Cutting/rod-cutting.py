#User function Template for python3

class Solution:
    def cutRod(self, price):
        #code here
        dp = price[:]
        for i in range(1, len(price)):
            for j in range(i-1, -1, -1):
                dp[i] = max(dp[i], dp[j] + price[i-j-1])
        return dp[-1]

#{ 
 # Driver Code Starts
#Initial Template for Python 3


def main():

    T = int(input())

    while (T > 0):
        # n = int(input())
        a = [int(x) for x in input().strip().split()]
        ob = Solution()
        print(ob.cutRod(a))

        T -= 1

        print("~")


if __name__ == "__main__":
    main()

# } Driver Code Ends