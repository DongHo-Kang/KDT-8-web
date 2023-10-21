package Java_Basic;

import java.util.Arrays;
import java.util.Comparator;

public class Array_method {

	public static void main(String[] args) {
		int[] arr = {0,1,2,3,4};
		// copyOf(arr, copy length)
		//처음부터 복사 시작
		int[] newArr1 = Arrays.copyOf(arr, arr.length);
		int[] newArr2 = Arrays.copyOf(arr, 3);
		int[] newArr3 = Arrays.copyOf(arr, arr.length+3);
		
		System.out.println(Arrays.toString(newArr1));
		System.out.println(Arrays.toString(newArr2));
		System.out.println(Arrays.toString(newArr3));

		
		//copyOfRange
		//범위를 지정하여 복사 가능
		int[] newArr4 = Arrays.copyOfRange(newArr3, 1, 4);
		System.out.println(Arrays.toString(newArr4));
		
		//fill
		//초기화 가능 & 기존 값을 지우고 넣어준 값으로 변경
		int[] fillArr1 = new int[5];
		Arrays.fill(fillArr1, 1);
		System.out.println(Arrays.toString(fillArr1));
		
		//시작 인덱스와 끝 인덱스 지정 가능
		int[] fillArr2 = new int[5];
		fillArr2[0] = 1;
		fillArr2[1] = 2;
		fillArr2[2] = 3;
		//3인덱스부터 끝 인덱스까지 100으로 채운다.
		Arrays.fill(fillArr2, 3, fillArr2.length, 100);
		System.out.println(Arrays.toString(fillArr2));
		
		//sort
		//오름차순 정렬
		int[] sortArr1 = {0,100,1,2,3,4};
		Arrays.sort(sortArr1);
		System.out.println(Arrays.toString(sortArr1));
		
		//내림차순 정렬
		Integer[] sortArr2 = {0,1,2,3,4};
		Arrays.sort(sortArr2, Comparator.reverseOrder());
		System.out.println(Arrays.toString(sortArr2));

		//equals
		//T/F로 반환한다.
		int[] equalArr1 = {1,2,3,4};
		int[] equalArr2 = {1,2,3,4};
		int[] equalArr3 = {1,3,2,4};
		int[] equalArr4 = {1,2,3,4,5};
		
		System.out.println(Arrays.equals(equalArr1, equalArr2));
		System.out.println(Arrays.equals(equalArr1, equalArr3));
		System.out.println(Arrays.equals(equalArr1, equalArr4));
		
		//deepEquls
		int doubleArr1[][] = {{1,2},{3,4},{5,6}};
		int doubleArr2[][] = {{1,2},{3,4},{5,6}};
		int doubleArr3[][] = {{1,3},{5,4},{7,6}};
		System.out.println(Arrays.deepEquals(doubleArr1, doubleArr2));
		System.out.println(Arrays.deepEquals(doubleArr1, doubleArr3));
	
		//binarySearch
		//해당 인덱스 값 반환
		System.out.println(Arrays.binarySearch(equalArr4, 3));
		
		
		
	}

}
