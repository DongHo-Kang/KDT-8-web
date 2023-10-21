package Java_Basic;

import java.util.Scanner;

public class Practice_array_231021 {

	public static void main(String[] args) {
		//1차원 배열 평균 구하기
//		Scanner sc = new Scanner(System.in);
//		int[] intSum = new int[5];
//		int sum = 0;
//		int avg;
//		
//		System.out.println(intSum.length + "개의 정수를 입력해주세요.");
//		for(int i=0; i< intSum.length; i++) {
//			intSum[i] = sc.nextInt();
//		}
//		
//		for(int a=0; a<intSum.length; a++) {
//			sum += intSum[a];
//		}
//		System.out.println("평균" + (double)sum/intSum.length);
//		sc.close();
		
		//2차원 배열 평균 구하기
		double[][] score = {
				{3.3, 3.4},
				{3.5, 3.6},
				{3.7, 4.0},
				{4.1, 4.2}
		};
		double sum = 0;
		
		System.out.print(score.length);

		for(int i=0; i<score.length; i++) {
			for(int a=0; a<score[i].length; a++) {
				sum += score[i][a];
			}
		}
		
		int n = score.length;
		int m = score[0].length;
		
		System.out.println("전체 평균은 " + sum/(n*m));
	}

}
