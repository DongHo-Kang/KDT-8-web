package Java_Basic;

import java.util.Scanner;

public class Practice_array_231021 {

	public static void main(String[] args) {
		//1���� �迭 ��� ���ϱ�
//		Scanner sc = new Scanner(System.in);
//		int[] intSum = new int[5];
//		int sum = 0;
//		int avg;
//		
//		System.out.println(intSum.length + "���� ������ �Է����ּ���.");
//		for(int i=0; i< intSum.length; i++) {
//			intSum[i] = sc.nextInt();
//		}
//		
//		for(int a=0; a<intSum.length; a++) {
//			sum += intSum[a];
//		}
//		System.out.println("���" + (double)sum/intSum.length);
//		sc.close();
		
		//2���� �迭 ��� ���ϱ�
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
		
		System.out.println("��ü ����� " + sum/(n*m));
	}

}
