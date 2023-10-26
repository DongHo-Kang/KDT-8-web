package Java_Generic;

//���׸� Ŭ����
//extends�� �������� Number�� �ش��ϴ� Ÿ�Ը� ���� �� �ִ�.
class Box<T extends Number>{
	private T item;
	
	public void setItem(T item) {
		this.item = item;
		
	}
	public T getItem() {
		return item;
	}
	
}

interface Movable{
	void move();
}

class Car implements Movable{
	@Override
	public void move() {
		System.out.println("�ڵ��� ���");
	}
}

//���׸� Ŭ����
//Car�� ����ϱ� ���� Movable�� ������ �д�.
//(Container Ŭ������ Movable�������̽��� �����ϴ� Ŭ������ ���)
class Container<T extends Movable>{
	private T item;
	
	public Container(T item) {
		this.item = item;
	}
	public void maekItMove() {
		item.move();
	}
}

public class GenericExample {

	public static void main(String[] args) {
//		Box<String> stringBox = new Box<>();
//		stringBox.setItem("Hello World");
//		String value = stringBox.getItem();
//		System.out.println(value);
		
		Box<Integer> intBox = new Box<>();
		intBox.setItem(5);
		Box<Double> doubleBox = new Box<>();
		doubleBox.setItem(4.4);
		
		Container<Car> carContainer = new Container<>(new Car());
		carContainer.maekItMove();
		
	}

}
