package Java_CodingTest;

public class Num3 {
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		int[] nums = {3,4,5,6,7,8,0,1,2};
		int target = 0;
		System.out.println(search(nums, target));

	}

	private static int search(int[] nums, int target) {
		// TODO Auto-generated method stub
		int result = -1;
		for(int a=0; a<nums.length; a++ ) {
			if(nums[a] == target) {
				result = a;
			}
		}
		
		return result;
	}

}
