package Java_Basic;

import java.util.Arrays;
import java.util.Scanner;

public class Array_231021 {

	public static void main(String[] args) {
		//배열 선언
		int[] intArr;
		char[] charArr;
		
		//배열 생성
		//배열 생성하면 크기 변경이 안된다.
		int[] intArr1 = new int[5];
		
		//배열 초기화
		int[] intArr2 = {1,2,3,4,5};
		
		Scanner sc = new Scanner(System.in);
		for(int i=0; i < intArr1.length; i++) {
			intArr1[i] = sc.nextInt();
		}
		System.out.println(Arrays.toString(intArr1));
		sc.close();
		
		//2차원 배열
		int[][] intDoubleArr;
		char[][] charDoubleArr;
		
		int[][] intDoubleArr2 = new int[2][3];
		
		int intDoubleArr3[][] = {{0,1,2},{3,4,5}};
		
		//for-each문
		for(int value: intArr1) {
			System.out.print(value + " ");
		}
		
		
	}

}
