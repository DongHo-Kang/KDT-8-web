package Java_Interface;

//1. 일반 클래스를 사용한 다형성
class Animal{
	public void sound() {
		System.out.println("동물은 소리를 냅니다.");
	}
}

class Dog extends Animal{
	@Override
	public void sound() {
		System.out.println("멍멍");
	}
}

class Cat extends Animal{
	@Override
	public void sound() {
		System.out.println("야옹");
	}
}

//2. 추상클래스를 사용한 다형성
abstract class Shape{
	abstract double area();
	
}

class Circle extends Shape {
	double radius;
	
	public Circle(double r) {
		this.radius = r;
	}
	
	@Override
	double area() {
		// TODO Auto-generated method stub
		return Math.PI * radius * radius;
	}}
class Rectangle extends Shape {
	double width, height;
	
	public Rectangle(double w, double h) {
		this.height = h;
		this.width = w;
		
		
	}
	
	@Override
	double area() {
		// TODO Auto-generated method stub
		return width * height;
	}
}

//인터페이스를 사용한 다형성
interface Flyable{
	void fly();
}

class Bird implements Flyable{

	@Override
	public void fly() {
		// TODO Auto-generated method stub
		System.out.println("새가 난다.");
	}

}

class Airplane implements Flyable{

	@Override
	public void fly() {
		// TODO Auto-generated method stub
		System.out.println("비행기가 날아간다.");
	}
	
}

public class JavaExample {

	public static void main(String[] args) {
		// 다형성은 각 클래스나 인터페이스의 참조변수를 사용하여 다양한 구현을 가진 객체를 참조
		// 다양한 형태의 객체
		// dog와 cat은 Animal 타입의 참소 변수. dog와 cat은 Dog와 Cat의 객체를 참조.
		Animal dog = new Dog();
		Animal cat = new Cat();
		dog.sound();
		cat.sound();
		
		Shape s1 = new Circle(4.9);
		Shape s2 = new Rectangle(3, 6);
		
		System.out.println(s1.area());
		System.out.println(s2.area());
		
		Flyable f1 = new Bird();
		Flyable f2 = new Airplane();
		
		f1.fly();
		f2.fly();
		
		

	}

}
