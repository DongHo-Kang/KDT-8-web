package exception;

import java.util.InputMismatchException;
import java.util.Scanner;

public class ExceptionTest {

	public static void main(String[] args) {
		//����ó��
		int num1 = 4;
		int num2 = 0;
//		System.out.println(num1+"/"+num2+"="+(num1/num2));
//		
//		System.out.println("���Ⱑ ������");
		try {
			System.out.println(num1+"/"+num2+"="+(num1/num2));
		}catch(ArithmeticException e) {
			System.out.println("0���� ������ ���ܰ� �߻��Ͽ����ϴ�.");
		}
		System.out.println("���Ⱑ ������");
		
		//�ε��� ������ ����� ��
		int[] intArr = {1,2,3,4};
		try {
			for(int i = 0; i <intArr.length + 1; i++) {
				System.out.println(intArr[i]);
			}
		}catch(ArrayIndexOutOfBoundsException e) {
			System.out.println("�ε����� ������ ������ϴ�.");
		}
		
		//�Է¿��� �� �߻��ϴ� ����
		Scanner sc = new Scanner(System.in);
		System.out.println("������ �Է��ϼ���: ");
		
		try {
			int n = sc.nextInt();
			
		}catch(InputMismatchException e) {
			System.out.println("�Է°��� �߸���. ������ �Է����ּ���.");
		}
		sc.close();
	}

}
