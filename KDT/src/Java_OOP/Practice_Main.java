package Java_OOP;

public class Practice_Main {

	public static void main(String[] args) {
		
		Practice_Cat cat = new Practice_Cat("�����","����", 20);
		Practice_Dog dog = new Practice_Dog("������", "����", 10);
		
		System.out.println(cat.makeSound());
		System.out.println(dog.makeSound());

	}

}
