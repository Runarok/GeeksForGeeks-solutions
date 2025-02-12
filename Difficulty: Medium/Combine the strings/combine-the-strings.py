class Solution:

    def combine(self, n, s):
        # Initialize variables to track the total lengths of red and blue segments
        r, b = 0, 0
        cr, cb = 0, 0  # Count of red and blue segments that are single-color
        rb, br = [0], [0]  # Lists to track mixed red-blue segments

        # Process each segment in the input list s
        for a in s:
            # If the segment has different start and end colors (mixed red and blue)
            if a[0] != a[-1]:
                # Track the length of mixed red-blue segments
                if a[0] == 'R':
                    rb.append(len(a))
                else:
                    br.append(len(a))
            elif a[0] == 'R':
                # If the segment is fully red, update the red count and red segment count
                r += len(a)
                cr += 1
            else:
                # If the segment is fully blue, update the blue count and blue segment count
                b += len(a)
                cb += 1
        
        # If there is exactly one red segment and one blue segment
        if len(rb) + len(br) == 2:
            # If there is only one red and one blue segment, return 0 (cannot combine)
            if cr == 1 and cb == 1:
                return 0
            # Otherwise, return the maximum of the total red or blue lengths
            return max(r, b)
        
        # If there is only one mixed red-blue segment (either red or blue)
        if len(rb) == 1 or len(br) == 1:
            # If both red and blue counts are zero, return 0
            if r == 0 and b == 0:
                return 0
            # Return the sum of red and blue lengths plus the longest mixed segment
            return (r + b) + max(max(rb), max(br))
        
        # Sort the mixed red-blue segments in descending order
        rb.sort(reverse=True)
        br.sort(reverse=True)

        # Initialize the final answer with the sum of red and blue lengths
        ans = r + b
        
        # Add the lengths of the red-blue mixed segments in pairs
        for i in range(min(len(rb), len(br)) - 1):
            ans += rb[i] + br[i]
        
        # Add the longest remaining mixed segment
        ans += max(rb[min(len(rb), len(br)) - 1], br[min(len(rb), len(br)) - 1])
        
        return ans
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':

    t = int(input())

    for _ in range(t):
        n = int(input())
        s = input().split()

        solObj = Solution()

        print(solObj.combine(n, s))
        print("~")

# } Driver Code Ends