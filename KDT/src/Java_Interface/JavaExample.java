package Java_Interface;

//1. �Ϲ� Ŭ������ ����� ������
class Animal{
	public void sound() {
		System.out.println("������ �Ҹ��� ���ϴ�.");
	}
}

class Dog extends Animal{
	@Override
	public void sound() {
		System.out.println("�۸�");
	}
}

class Cat extends Animal{
	@Override
	public void sound() {
		System.out.println("�߿�");
	}
}

//2. �߻�Ŭ������ ����� ������
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

//�������̽��� ����� ������
interface Flyable{
	void fly();
}

class Bird implements Flyable{

	@Override
	public void fly() {
		// TODO Auto-generated method stub
		System.out.println("���� ����.");
	}

}

class Airplane implements Flyable{

	@Override
	public void fly() {
		// TODO Auto-generated method stub
		System.out.println("����Ⱑ ���ư���.");
	}
	
}

public class JavaExample {

	public static void main(String[] args) {
		// �������� �� Ŭ������ �������̽��� ���������� ����Ͽ� �پ��� ������ ���� ��ü�� ����
		// �پ��� ������ ��ü
		// dog�� cat�� Animal Ÿ���� ���� ����. dog�� cat�� Dog�� Cat�� ��ü�� ����.
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
