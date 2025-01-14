#User function Template for python3

class Solution:
    def mergeNsort(self, arr, brr):
        return sorted(set(arr).union(brr))



#{ 
 # Driver Code Starts
# Initial Template for Python 3


def main():
    import sys
    input = sys.stdin.read
    data = input().strip().split("\n")

    t = int(data[0])
    results = []
    index = 1

    while t > 0:
        arr = list(map(int, data[index].strip().split()))
        brr = list(map(int, data[index + 1].strip().split()))
        index += 2

        solution = Solution()
        res = solution.mergeNsort(arr, brr)
        # Join the sorted list into a string of space-separated numbers
        results.append(" ".join(map(str, res)))

        t -= 1

    for result in results:
        print(result)
        print("~")


if __name__ == "__main__":
    main()

# } Driver Code Ends