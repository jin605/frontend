package code;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Deque;
import java.util.LinkedList;
import java.util.StringTokenizer;

public class boj1697 {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int[] vis = new int[100001];

        int n = Integer.parseInt(st.nextToken());
        int k = Integer.parseInt(st.nextToken());

        Deque<Integer> que = new LinkedList<>();

        que.offerLast(n);
        vis[n] = 1;

        while(!que.isEmpty()) {

            int cur = que.pollFirst();

            if (cur == k) {
                System.out.println(vis[cur] -1);
                return;
            }

            int[] dir = {cur -1, cur +1, cur *2};

            for (int next : dir) {
                if (next >= 0 && next <= 100000 && vis[next] == 0) {
                    vis[next] = vis[cur] + 1;
                    que.offerLast(next);
                }
            }

        }


        
    }
    
}