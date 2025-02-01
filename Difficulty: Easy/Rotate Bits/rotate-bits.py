# User function Template for python3

class Solution:
    def rotate(self, number, positions):
        # Ensure the number of positions is within the 16-bit range
        positions = positions % 16
        result = [0, 0]  # To store the left and right rotated results

        # Store the number in a temporary variable
        temp = number

        # Create a mask to pick the leftmost 'positions' bits
        mask = (1 << positions) - 1  
        shift = (temp & mask)  # Extract the leftmost 'positions' bits
        temp = (temp >> positions)  # Shift the remaining bits to the right
        temp += (shift << (16 - positions))  # Place the extracted bits at the rightmost end
        result[1] = temp  # Store the right rotated number

        # Reset the temporary variable
        temp = number

        # Create a mask to pick the rightmost (16 - positions) bits
        mask = ~((1 << (16 - positions)) - 1)
        shift = (temp & mask)  # Extract the rightmost (16 - positions) bits
        temp = (temp << positions)  # Shift the remaining bits to the left
        temp += (shift >> (16 - positions))  # Place the extracted bits at the leftmost end
        result[0] = temp  # Store the left rotated number

        # Mask the result to ensure it's within 16-bit range
        mask = (1 << 16) - 1
        result[0] = (result[0] & mask)

        return result

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        n = int(input())
        d = int(input())
        ob = Solution()
        ans = ob.rotate(n, d)
        print(ans[0], end=" ")
        print(ans[1])
        print("~")
# } Driver Code Ends