package exception;

public class Practice_exception {

	public static void main(String[] args) {
		int[] arr = {1,2,3,4};
		
		try {
		for(int i=0; i<7; i++) {
			System.out.println(arr[i]);
		}
		}catch(ArrayIndexOutOfBoundsException e) {
			System.out.println("�ε����� ������ ������ϴ�.");
		}
		

	}

}
