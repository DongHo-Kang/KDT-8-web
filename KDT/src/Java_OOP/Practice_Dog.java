package Java_OOP;

public class Practice_Dog extends Practice_Animal{
	public Practice_Dog(String type, String name, int age) {
		super(type, name, age);
	}
	
	@Override
	public String makeSound() {
		return super.makeSound() + "港港 家府甫 辰促.";
		
	}
}
