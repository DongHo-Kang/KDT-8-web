package Java_Basic;

import java.util.ArrayList;

public class ArrayList_231021 {

	public static void main(String[] args) {
		ArrayList<Integer> arrList1 = new ArrayList<>();
		ArrayList<String> arrList2 = new ArrayList<>();
		
		arrList1.add(10);
		arrList1.add(8);
		arrList1.add(6);
		arrList1.add(4);
		arrList1.add(0,1);
		
		//addAll
		ArrayList<Integer> arrList3 = new ArrayList<>();
		arrList3.add(1);
		arrList3.add(2);
		arrList3.addAll(arrList3);
		
		//indexOd
		//같은 값의 인덱스 번호 찾
		System.out.println(arrList1.indexOf(1));
		System.out.println(arrList1.indexOf(12));
		
		
		for(int i=0; i < arrList1.size(); i++) {
			System.out.println(arrList1.get(i));
		}
				
		
		

	}

}
