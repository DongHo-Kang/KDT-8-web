package Java_Class;

public class CarContainer {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Car bmw = new Car(30);
		Car kia = new Car(20);
		
		bmw.start();
		kia.start();
		
//		//�߸��� ���� ���
//		bmw.speed = 120;
//		kia.speed = 90;
		
		//��ü ������� ��ȣ
//		bmw.setSpeed(-120);
		//kia.setSpeed(90);
		
		bmw.setSpeed(120);
		kia.setSpeed(90);
		
		//�ߺ� �ڵ�
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
