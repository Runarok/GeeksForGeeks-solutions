# User function Template for python3

class Solution:
    def carpetBox(self, a, b, c, d):
        # Function to calculate the number of moves required to fit the carpet in the box
        def count_moves_to_fit(x, y, box_x, box_y):
            moves = 0
            # While the carpet does not fit inside the box
            while x > box_x or y > box_y:
                # If the carpet is too wide, fold it
                if x > box_x:
                    x //= 2
                # If the carpet is too tall, fold it
                elif y > box_y:
                    y //= 2
                # Increment the move count
                moves += 1
            return moves
        
        # Try both orientations (a x b) and (b x a)
        moves_orientation_1 = count_moves_to_fit(a, b, c, d)
        moves_orientation_2 = count_moves_to_fit(b, a, c, d)
        
        # Return the minimum number of moves between both orientations
        return min(moves_orientation_1, moves_orientation_2)

#{ 
 # Driver Code Starts
#Initial Template for Python 3

def main():
        T=int(input())
        while(T>0):
            A,B,C,D = map(int, input().split())
            
            obj = Solution()
            print(obj.carpetBox(A,B,C,D))
            
            T-=1


            print("~")
if __name__ == "__main__":
    main()


# } Driver Code Ends