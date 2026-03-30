package codingtest;

import java.util.*;
import java.io.*;


public class boj1012 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int[] dx = {-1, 1, 0, 0};
        int[] dy = {0, 0, -1, 1};
        
        int t = Integer.parseInt(br.readLine());

        for (int i = 0; i < t; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int m = Integer.parseInt(st.nextToken());
            int n = Integer.parseInt(st.nextToken());
            int k = Integer.parseInt(st.nextToken());

            int[][] board = new int[m][n];
            boolean[][] vis = new boolean[m][n];

            for (int j =0; j < m; j++) {
                for (int l = 0 ; l < n;l++) {
                    board[j][l] = 0;
                }
            }


            for (int j = 0; j < k;j++) {

                st = new StringTokenizer(br.readLine());
                int a = Integer.parseInt(st.nextToken());
                int b = Integer.parseInt(st.nextToken());

                board[a][b] = 1;
            }

            int count = 0;
            Deque<Pair> stk = new LinkedList<>();

            for (int j =0; j < m; j++) {
                for (int l = 0 ; l < n;l++) {

                    if (board[j][l] == 0 || vis[j][l]) continue;

                    
                    count++;
                    vis[j][l] = true;
                    stk.offerLast(new Pair(j,l));

                    while(!stk.isEmpty()) {

                        Pair cur = stk.pollFirst();

                        for (int dir = 0; dir <4; dir ++) {

                            int nx = cur.x + dx[dir];
                            int ny = cur.y + dy[dir];

                            if (nx < 0 || nx >= m || ny <0 || ny >= n) continue;
                            if (board[nx][ny] == 0 || vis[nx][ny]) continue;

                            vis[nx][ny] = true;
                            stk.offerLast(new Pair(nx,ny));

                        }
                    }

                                        
                            
                }
            }

        
            System.out.println(count);
            
        }
        
            
    }

    static class Pair{
        int x, y;
        public Pair(int x, int y) {

            this.x = x;
            this.y = y;
        }
    }
    
}
