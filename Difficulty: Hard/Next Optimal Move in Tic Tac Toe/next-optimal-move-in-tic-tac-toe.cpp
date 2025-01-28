//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution{
public:
    char player = 'x', opponent = 'o';  // Define the player and opponent characters
    
    // Function to check if there are any moves left on the board
    bool isMovesLeft(char board[3][3]){
        for (int i = 0; i < 3; i++)
            for (int j = 0; j < 3; j++)
                if (board[i][j] == '_')  // If there is an empty space ('_'), return true
                    return true;
        return false;  // No moves left
    }
    
    // Function to evaluate the board and return a score
    int evaluate(char b[3][3]){
        // Check rows for a winner
        for (int row = 0; row < 3; row++){
            if (b[row][0] == b[row][1] && b[row][1] == b[row][2]){
                if (b[row][0] == player)  // If player wins, return +10
                    return +10;
                else if (b[row][0] == opponent)  // If opponent wins, return -10
                    return -10;
            }
        }
     
        // Check columns for a winner
        for (int col = 0; col < 3; col++){
            if (b[0][col] == b[1][col] && b[1][col] == b[2][col]){
                if (b[0][col] == player)  // If player wins, return +10
                    return +10;
                else if (b[0][col] == opponent)  // If opponent wins, return -10
                    return -10;
            }
        }

        // Check the main diagonal
        if (b[0][0] == b[1][1] && b[1][1] == b[2][2]){
            if (b[0][0] == player)  // If player wins on diagonal, return +10
                return +10;
            else if (b[0][0] == opponent)  // If opponent wins on diagonal, return -10
                return -10;
        }
     
        // Check the anti-diagonal
        if (b[0][2] == b[1][1] && b[1][1] == b[2][0]){
            if (b[0][2] == player)  // If player wins on anti-diagonal, return +10
                return +10;
            else if (b[0][2] == opponent)  // If opponent wins on anti-diagonal, return -10
                return -10;
        }
        
        return 0;  // No winner yet
    }
    
    // Minimax algorithm to determine the best move
    int minimax(char board[3][3], int depth, bool isMax){
        int score = evaluate(board);  // Evaluate the current state of the board
        
        if (score == 10)  // If the player wins, return +10
            return score;
        if (score == -10)  // If the opponent wins, return -10
            return score;
        
        if (!isMovesLeft(board))  // If no moves left, it's a draw, return 0
            return 0;
        
        if (isMax){  // Maximizer (player's turn)
            int best = -1000;  // Start with a very low score
            for (int i = 0; i < 3; i++){
                for (int j = 0; j < 3; j++){
                    if (board[i][j] == '_'){  // If the spot is empty, make a move
                        board[i][j] = player;
                        best = max(best, minimax(board, depth + 1, !isMax));  // Recursively evaluate the move
                        board[i][j] = '_';  // Undo the move
                    }
                }
            }
            return best;  // Return the best score
        }
        else{  // Minimizer (opponent's turn)
            int best = 1000;  // Start with a very high score
            for (int i = 0; i < 3; i++){
                for (int j = 0; j < 3; j++){
                    if (board[i][j] == '_'){  // If the spot is empty, make a move
                        board[i][j] = opponent;
                        best = min(best, minimax(board, depth + 1, !isMax));  // Recursively evaluate the move
                        board[i][j] = '_';  // Undo the move
                    }
                }
            }
            return best;  // Return the best score
        }
    }
    
    // Function to find the best move for the player
    vector<int> findBestMove(char board[3][3]){
        int bestVal = -1000;  // Initialize the best value to a very low number
        int row = -1, col = -1;  // Initialize the best move to be -1, -1
        vector<int> res;
        
        // Try every possible move and evaluate it
        for (int i = 0; i < 3; i++){
            for (int j = 0; j < 3; j++){
                if (board[i][j] == '_'){  // If the spot is empty
                    board[i][j] = player;  // Make the player's move
                    int moveVal = minimax(board, 0, false);  // Evaluate the move
                    board[i][j] = '_';  // Undo the move
                    
                    if (moveVal > bestVal){  // If the current move is better, update the best move
                        row = i;
                        col = j;
                        bestVal = moveVal;
                    }
                }
            }
        }
        
        res.push_back(row);  // Push the best row to the result
        res.push_back(col);  // Push the best column to the result
        return res;  // Return the best move
    }
};


//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        char board[3][3];
        for(int i = 0;i < 3;i++)
            cin>>board[i][0]>>board[i][1]>>board[i][2];
        
        Solution ob;
        vector<int> ans = ob.findBestMove(board);
        cout<<ans[0]<<" "<<ans[1]<<"\n";
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends