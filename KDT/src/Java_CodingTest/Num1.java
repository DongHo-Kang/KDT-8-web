package Java_CodingTest;

public class Num1 {

	public static void main(String[] args) {
		
		int[] sum = {1,2,5,7,4,3,6,9};
		
		System.out.println(sumLessThan(sum,7));
	}

	private static int sumLessThan(int[] sum, int i) {
		// TODO Auto-generated method stub
		int result = 0;
		for(int a = 0; a < sum.length; a ++) {
			if(sum[a]< i) {
				result += sum[a];
			}
		}
		return result;
	}

}
