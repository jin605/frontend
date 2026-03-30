package codingtest;

import java.util.*;
import java.io.*;

public class boj7576_1 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int m = Integer.parseInt(st.nextToken());
        int n = Integer.parseInt(st.nextToken());

        int[][] board = new int[m][n];
        int[][] dist = new int[m][n];

        int[] dx = {0, 0, 1,-1};
        int[] dy = {1,-1, 0, 0};

        Deque<Pair> que = new LinkedList<>();

        for (int i = 0; i < m;i++) {
            
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j< n ;j++) {

                board[n][m] = Integer.parseInt(st.nextToken());
                if (board[n][m] == 1) {
                    que.offerLast(new Pair(n,m));
                }
                if (board[n][m] == 0) {
                    dist[n][m] = -1;
                }

            }
        }

        while(!que.isEmpty()) {

            Pair cur = que.pollFirst();

            for (int dir = 0; dir < 4; dir ++) {

                int nx = cur.x + dx[dir];
                int ny = cur.y + dy[dir];

                if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
                if (dist[nx][ny] >= 0) continue;

                

            }




        }
       

    }

    static class Pair {
        int x, y;
        Pair(int x, int y) {
            this.x = x;
            this.y = y;
        }
    }
}
