#User function Template for python3

class Solution:
    def findOccurrence(self, mat, target):
        def dfs(x, y, index, visited):
            if index == len(target):
                return 1
            count = 0
            visited.add((x, y))
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:  # up, down, left, right
                nx, ny = x + dx, y + dy
                if 0 <= nx < len(mat) and 0 <= ny < len(mat[0]) and mat[nx][ny] == target[index] and (nx, ny) not in visited:
                    count += dfs(nx, ny, index + 1, visited)
            visited.remove((x, y))
            return count

        total_count = 0
        for i in range(len(mat)):
            for j in range(len(mat[0])):
                if mat[i][j] == target[0]:
                    total_count += dfs(i, j, 1, set())
        return total_count

#{ 
 # Driver Code Starts
#Initial Template for Python 3
if __name__ == "__main__":
    t=int(input())
    for _ in range(t):
        line=input().strip().split()
        R=int(line[0])
        C=int(line[1])
        mat=[]
        for _ in range(R):
            mat.append( [x for x in input().strip().split()] )
        target=input()
        obj = Solution()
        print(obj.findOccurrence(mat,target))
        print("~")
# } Driver Code Ends