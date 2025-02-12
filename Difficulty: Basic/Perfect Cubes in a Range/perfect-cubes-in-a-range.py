# User function Template for python3

class Solution:
    def properCubes(self, a, b):
        # List to store the cube numbers within the given range
        cube_numbers = []
        
        # Find the smallest integer whose cube is greater than or equal to 'a'
        start_number = int(a ** (1/3))
        if start_number ** 3 < a:
            start_number += 1

        # Generate and store cube numbers until the cube exceeds 'b'
        while start_number ** 3 <= b:
            cube_numbers.append(start_number ** 3)
            start_number += 1

        # If no cube numbers were found in the range, return [-1]
        return cube_numbers if cube_numbers else [-1]
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        a, b = [int(x) for x in input().split()]
        
        ob = Solution()
        ans = ob.properCubes(a, b)
        if len(ans) == 1 and ans[0] == -1:
            print("No")
        else:
            for it in ans:
                print(it,end=" ")
            print()
# } Driver Code Ends