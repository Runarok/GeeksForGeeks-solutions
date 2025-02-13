//{ Driver Code Starts
import java.util.*;
import java.lang.*;
import java.io.*;

class GFG {
	public static void main(String[] args) throws IOException
	{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine().trim());
        while(t-->0)
        {
            String present[] = new String[12];
            
            for (int i = 0; i < 12; i++) {
                present[i] = br.readLine();
            }
            
            int n = Integer.parseInt(br.readLine().trim());
            String move[] = br.readLine().trim().split(" ");
            
            
            Compute obj = new Compute();
            String ans[] = obj.newFormation(present, move, n);
            for(int i=0;i<12;i++)
                System.out.println(ans[i]);
            
        }
	}
}
// } Driver Code Ends


//User function Template for Java
class Compute {

    // Defines the mapping for rotating face indices
    String[] rotationSteps = new String[]{"0-2", "1-5", "2-8", "4-4", "3-1", "5-7", "6-0", "7-3", "8-6"};

    // Adjacent face mappings for different cube faces
    String[][] upAdjacentFaces = {
            {"B", "2", "1", "0"},
            {"R", "2", "1", "0"},
            {"F", "2", "1", "0"},
            {"L", "2", "1", "0"},
    };

    String[][] frontAdjacentFaces = {
            {"U", "6", "7", "8"},
            {"R", "0", "3", "6"},
            {"D", "2", "1", "0"},
            {"L", "8", "5", "2"}
    };

    String[][] leftAdjacentFaces = {
            {"U", "0", "3", "6"},
            {"F", "0", "3", "6"},
            {"D", "0", "3", "6"},
            {"B", "8", "5", "2"}
    };

    String[][] rightAdjacentFaces = {
            {"U", "8", "5", "2"},
            {"B", "0", "3", "6"},
            {"D", "8", "5", "2"},
            {"F", "8", "5", "2"}
    };

    String[][] backAdjacentFaces = {
            {"R", "2", "5", "8"},
            {"U", "0", "1", "2"},
            {"L", "6", "3", "0"},
            {"D", "8", "7", "6"}
    };

    String[][] downAdjacentFaces = {
            {"R", "6", "7", "8"},
            {"B", "6", "7", "8"},
            {"L", "6", "7", "8"},
            {"F", "6", "7", "8"}
    };

    // Index mapping for cube faces
    int upFaceIndex = 0;
    int frontFaceIndex = 1;
    int leftFaceIndex = 2;
    int rightFaceIndex = 3;
    int backFaceIndex = 4;
    int downFaceIndex = 5;

    // Stores the current state of cube faces
    String[] cubeFaces = new String[6];

    public String[] newFormation(String present[], String moves[], int moveCount) {
        this.cubeFaces = new String[6];

        // Extracts only face colors from the input
        for (int i = 0; i < 12; i += 2) {
            this.cubeFaces[i / 2] = present[i + 1];
        }

        // Apply each move to the cube
        for (String move : moves) {
            String faceSymbol;
            boolean isAntiClockwise = false;

            if (move.length() > 1) {
                faceSymbol = move.substring(0, 1);
                isAntiClockwise = true;
            } else {
                faceSymbol = move;
            }

            int faceIndex = getFaceIndex(faceSymbol);
            rotateFace(faceIndex, isAntiClockwise);
            rotateAdjacentFaces(getAdjacentFaces(faceSymbol), isAntiClockwise);
        }

        // Update the present array with new cube state
        for (int i = 0; i < 6; i++) {
            present[i * 2 + 1] = this.cubeFaces[i];
        }
        return present;
    }

    // Returns adjacent face mappings for a given face
    private String[][] getAdjacentFaces(String faceSymbol) {
        switch (faceSymbol) {
            case "U":
                return upAdjacentFaces;
            case "F":
                return frontAdjacentFaces;
            case "L":
                return leftAdjacentFaces;
            case "R":
                return rightAdjacentFaces;
            case "B":
                return backAdjacentFaces;
            default:
                return downAdjacentFaces;
        }
    }

    // Returns the index of a face based on its symbol
    private int getFaceIndex(String faceSymbol) {
        switch (faceSymbol) {
            case "U":
                return upFaceIndex;
            case "F":
                return frontFaceIndex;
            case "L":
                return leftFaceIndex;
            case "R":
                return rightFaceIndex;
            case "B":
                return backFaceIndex;
            default:
                return downFaceIndex;
        }
    }

    // Rotates the specified face, either clockwise or anti-clockwise
    private void rotateFace(int faceIndex, boolean isAntiClockwise) {
        String face = cubeFaces[faceIndex];
        char[] originalFace = face.toCharArray();
        char[] rotatedFace = new char[9];

        for (String step : rotationSteps) {
            String[] indices = step.split("-");
            int sourceIndex = isAntiClockwise ? Integer.parseInt(indices[1]) : Integer.parseInt(indices[0]);
            int destinationIndex = isAntiClockwise ? Integer.parseInt(indices[0]) : Integer.parseInt(indices[1]);
            rotatedFace[destinationIndex] = originalFace[sourceIndex];
        }

        cubeFaces[faceIndex] = new String(rotatedFace);
    }

    // Rotates adjacent faces of the specified face
    private void rotateAdjacentFaces(String[][] adjacentFaces, boolean isAntiClockwise) {
        String lastModifiedFace = "";

        if (isAntiClockwise) {
            // Rotate adjacent faces in reverse order for anti-clockwise rotation
            for (int i = adjacentFaces.length - 1; i >= 0; i--) {
                String[] source = adjacentFaces[i];
                String[] destination = (i == 0) ? adjacentFaces[adjacentFaces.length - 1] : adjacentFaces[i - 1];

                String sourceFace = (i == adjacentFaces.length - 1) ? cubeFaces[getFaceIndex(source[0])] : lastModifiedFace;
                String destinationFace = cubeFaces[getFaceIndex(destination[0])];

                lastModifiedFace = destinationFace;
                char[] destFaceArray = destinationFace.toCharArray();
                char[] sourceFaceArray = sourceFace.toCharArray();

                for (int j = 1; j < source.length; j++) {
                    int sourceIndex = Integer.parseInt(source[j]);
                    int destinationIndex = Integer.parseInt(destination[j]);
                    destFaceArray[destinationIndex] = sourceFaceArray[sourceIndex];
                }

                cubeFaces[getFaceIndex(destination[0])] = new String(destFaceArray);
            }
        } else {
            // Rotate adjacent faces in normal order for clockwise rotation
            for (int i = 0; i < adjacentFaces.length; i++) {
                String[] source = adjacentFaces[i];
                String[] destination = (i < adjacentFaces.length - 1) ? adjacentFaces[i + 1] : adjacentFaces[0];

                String sourceFace = (i == 0) ? cubeFaces[getFaceIndex(source[0])] : lastModifiedFace;
                String destinationFace = cubeFaces[getFaceIndex(destination[0])];

                lastModifiedFace = destinationFace;
                char[] destFaceArray = destinationFace.toCharArray();
                char[] sourceFaceArray = sourceFace.toCharArray();

                for (int j = 1; j < source.length; j++) {
                    int sourceIndex = Integer.parseInt(source[j]);
                    int destinationIndex = Integer.parseInt(destination[j]);
                    destFaceArray[destinationIndex] = sourceFaceArray[sourceIndex];
                }

                cubeFaces[getFaceIndex(destination[0])] = new String(destFaceArray);
            }
        }
    }
}
