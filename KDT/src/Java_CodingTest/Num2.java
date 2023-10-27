package Java_CodingTest;

import java.util.ArrayList;
import java.util.List;

public class Num2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] num2 = {3, 2, 5, 7, 11};
		int target = 9;
		List<Integer> result = findIndices(num2, target);
		System.out.println(result);
	}

	private static List<Integer> findIndices(int[] num2, int target) {
		// TODO Auto-generated method stub
		List<Integer> result1 = new ArrayList<>();
		for(int a=0; a < num2.length; a ++) {
			for(int b= a+ 1 ; b <num2.length; b++) {
				if(num2[a] + num2[b] == target) {
					result1.add(a);
					result1.add(b);
				}
			}
		}
		
		return result1;
	}

}
