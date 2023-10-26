package Java_Generic;

//제네릭 클래스
//extends는 제한으로 Number에 해당하는 타입만 넣을 수 있다.
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
		System.out.println("자동차 출발");
	}
}

//제네릭 클래스
//Car을 사용하기 위해 Movable로 제한을 둔다.
//(Container 클래스는 Movable인터페이스를 구현하는 클래스만 허용)
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
