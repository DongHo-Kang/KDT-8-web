package Java_Generic;

import java.util.ArrayList;


//extends : ~�� ����ϴ� Ŭ����, �������̽�...
//super : ~�� ����ϴ� Ŭ����, �������̽�...

public class GenericExample2 {
	
	//���ϵ� ī�� 
	public void processList(ArrayList<? extends Number> list) {
		for(Number num: list) {
			System.out.println(num);
		}
		//�Ұ���
//		list.add(1);
	}
	
	//Ÿ���Ķ����
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
		
		//���ϵ�ī�带 ����Ͽ� ����Ʈ�� ���� ���
		example.processList(integerList);
		example.processList(doubleList);
		
		//Ÿ�� �Ķ���͸� ����Ͽ� ����Ʈ�� ������ �߰�
		example.addToNumberList(integerList, 4);
		example.addToNumberList(doubleList, 4.4);
		
		System.out.println("--------------------------");
		example.processList(integerList);
		example.processList(doubleList);
		
		ArrayList<Number> numbers = new ArrayList<>();
		//Number�� �������� super�� ���� ���� ������ Integer�� �� �� �ִ�.
		example.addNumber(numbers);
		System.out.println(numbers);
		
		
	}

}
