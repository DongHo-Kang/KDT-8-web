package Java_Generic;
import java.util.HashSet;
import java.util.Scanner;

public class Practice_Collection {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);
		HashSet<Integer> numbers = new HashSet<>();
		System.out.println("������ �Է��ϼ���. ����� -1�Դϴ�.");
		while(true) {
			int input = scan.nextInt();
			if(input == -1) {
				break;
			}
			numbers.add(input);
		}
		System.out.println("�ߺ����� �ʴ� ������ :");
		for(Integer num:numbers) {
			System.out.println(num);
		}
	}

}
