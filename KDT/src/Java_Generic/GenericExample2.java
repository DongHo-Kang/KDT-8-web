package Java_Generic;

import java.util.ArrayList;


//extends : ~을 상속하는 클래스, 인터페이스...
//super : ~이 상속하는 클래스, 인터페이스...

public class GenericExample2 {
	
	//와일드 카드 
	public void processList(ArrayList<? extends Number> list) {
		for(Number num: list) {
			System.out.println(num);
		}
		//불가능
//		list.add(1);
	}
	
	//타입파라미터
	public <T extends Number> void addToNumberList(ArrayList<T> list, T item) {
		list.add(item);
	}
	
	// ? super T
	public void addNumber(ArrayList<? super Integer> list) {
		for(int i=1; i <=5; i++) {
			list.add(i);
		}
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		GenericExample2 example = new GenericExample2();
		ArrayList<Integer> integerList = new ArrayList<>();
		integerList.add(1);
		integerList.add(2);
		integerList.add(3);
		
		ArrayList<Double> doubleList = new ArrayList<>();
		doubleList.add(3.3);
		doubleList.add(2.2);
		doubleList.add(1.1);
		
		//와일드카드를 사용하여 리스트의 내용 출력
		example.processList(integerList);
		example.processList(doubleList);
		
		//타입 파라미터를 사용하여 리스트에 아이템 추가
		example.addToNumberList(integerList, 4);
		example.addToNumberList(doubleList, 4.4);
		
		System.out.println("--------------------------");
		example.processList(integerList);
		example.processList(doubleList);
		
		ArrayList<Number> numbers = new ArrayList<>();
		//Number을 보냈지만 super를 통해 하위 제한이 Integer만 올 수 있다.
		example.addNumber(numbers);
		System.out.println(numbers);
		
		
	}

}
