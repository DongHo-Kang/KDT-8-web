package Java_Generic;
import java.util.HashSet;
import java.util.Scanner;

public class Practice_Collection {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);
		HashSet<Integer> numbers = new HashSet<>();
		System.out.println("정수를 입력하세요. 종료는 -1입니다.");
		while(true) {
			int input = scan.nextInt();
			if(input == -1) {
				break;
			}
			numbers.add(input);
		}
		System.out.println("중복되지 않는 정수는 :");
		for(Integer num:numbers) {
			System.out.println(num);
		}
	}

}
