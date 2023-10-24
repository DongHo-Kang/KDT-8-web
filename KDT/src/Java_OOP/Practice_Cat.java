package Java_OOP;

public class Practice_Cat  extends Practice_Animal{
	public Practice_Cat(String type, String name, int age) {
		super(type, name, age);
	}
	
	@Override
	public String makeSound() {
		return super.makeSound() + "具克 家府甫 辰促.";
	}
}
