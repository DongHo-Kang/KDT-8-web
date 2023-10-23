package Java_Class;

public class CarContainer {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Car bmw = new Car();
		Car kia = new Car();
		
		bmw.start();
		kia.start();
		
//		//肋给等 立辟 规过
//		bmw.speed = 120;
//		kia.speed = 90;

		bmw.setSpeed(120);
		kia.setSpeed(90);
		
		System.out.println("bmw"+ bmw.getSpeed());
		System.out.println("kia"+ kia.getSpeed());
		
	}

}
