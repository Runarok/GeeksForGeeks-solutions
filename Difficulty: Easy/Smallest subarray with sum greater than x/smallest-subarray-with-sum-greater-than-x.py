class Solution:
    def smallestSubWithSum(self, x, arr):
        n = len(arr)
        min_length = n + 1
        start = 0
        current_sum = 0

        for end in range(n):
            current_sum += arr[end]

            while current_sum > x:
                min_length = min(min_length, end - start + 1)
                current_sum -= arr[start]
                start += 1

        return min_length if min_length <= n else 0

#{ 
 # Driver Code Starts
def main():

    T = int(input())

    while (T > 0):
        x = int(input())
        a = [int(x) for x in input().strip().split()]
        print(Solution().smallestSubWithSum(x, a))

        T -= 1
        print("~")


if __name__ == "__main__":
    main()

# } Driver Code Ends
