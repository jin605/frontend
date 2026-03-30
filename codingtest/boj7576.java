package codingtest;

import java.util.*;
import java.io.*;

public class boj7576 {
    static int n, m;
    static int[][] board;
    static int[][] dist;
    static int[] dx = {1, 0, -1, 0};
    static int[] dy = {0, 1, 0, -1};

    static class Pair {
        int x;
        int y;

        Pair(int x, int y) {
            this.x = x;
            this.y = y;
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        m = Integer.parseInt(st.nextToken()); // 가로 칸 수
        n = Integer.parseInt(st.nextToken()); // 세로 칸 수

        board = new int[n][m];
        dist = new int[n][m];
        Deque<Pair> q = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < m; j++) {
                board[i][j] = Integer.parseInt(st.nextToken());
                
                if (board[i][j] == 1) { // 익은 토마토 (시작점)
                    q.offerLast(new Pair(i, j));
                }
                if (board[i][j] == 0) { // 익지 않은 토마토
                    dist[i][j] = -1;
                }
            }
        }

        // BFS 시작
        while (!q.isEmpty()) {
            Pair cur = q.pollFirst();

            for (int dir = 0; dir < 4; dir++) {
                int nx = cur.x + dx[dir];
                int ny = cur.y + dy[dir];

                // 범위를 벗어났거나 이미 방문(익었거나 빈 칸)한 경우
                if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
                if (dist[nx][ny] >= 0) continue;

                dist[nx][ny] = dist[cur.x][cur.y] + 1;
                q.offerLast(new Pair(nx, ny));
            }
        }

        // 결과 계산
        int ans = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (dist[i][j] == -1) { // 모두 익지 못하는 상황
                    System.out.println(-1);
                    return;
                }
                ans = Math.max(ans, dist[i][j]);
            }
        }
        System.out.println(ans);
    }
}
