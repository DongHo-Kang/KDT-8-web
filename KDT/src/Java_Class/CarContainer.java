package Java_Class;

public class CarContainer {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Car bmw = new Car(30);
		Car kia = new Car(20);
		
		bmw.start();
		kia.start();
		
//		//잘못된 접근 방법
//		bmw.speed = 120;
//		kia.speed = 90;
		
		//객체 멤버변수 보호
//		bmw.setSpeed(-120);
		//kia.setSpeed(90);
		
		bmw.setSpeed(120);
		kia.setSpeed(90);
		
		//중복 코드
//		int bmwSpeed = bmw.getSpeed();
//		bmwSpeed = bmwSpeed + 100;
//		bmw.setSpeed(bmwSpeed);
//		
//		int kiaSpeed = kia.getSpeed();
//		kiaSpeed = kiaSpeed + 100;
//		kia.setSpeed(kiaSpeed);
		
		bmw.increaseSpeed(100);
		kia.increaseSpeed(100);
		
		System.out.println("bmw"+ bmw.getSpeed());
		System.out.println("kia"+ kia.getSpeed());
		
	}

}
