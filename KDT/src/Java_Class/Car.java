package Java_Class;

public class Car {
	
	//�������
	private int speed;
	
	//�޼ҵ�
	void start() {
		System.out.println("Car Start");
	}

	//���콺 ��Ŭ�� source���� getter�� setter�� ������ ���� �� �ִ�.
	public int getSpeed() {
		return speed;
	}

	public void setSpeed(int speed) {
		//ó�� �Ҵ�Ǿ��� ���� 0���� �Ҵ�Ǿ� �ִ�.
		System.out.println(this.speed);
		
		this.speed = speed;
	}
	
//	//setter �޼ҵ�
//	void setSpeed(int speed) {
//		this.speed = speed;
//	}
//	
//	//getter �޼ҵ�
//	int getSpeed() {
//		return this.speed;
//	}
	
}
