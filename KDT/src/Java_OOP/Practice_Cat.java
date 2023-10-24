package Java_OOP;

public class Practice_Cat  extends Practice_Animal{
	public Practice_Cat(String type, String name, int age) {
		super(type, name, age);
	}
	
	@Override
	public String makeSound() {
		return super.makeSound() + "야옹 소리를 낸다.";
	}
}
