package Java_Class;

public class Car {
	
	//����������
	//public: ���� Ŭ����O, ���� ��Ű��O, �ڽ� Ŭ����O, ��üO
	//protected: ���� Ŭ����O, ���� ��Ű��O, �ڽ� Ŭ����O
	//default: ���� Ŭ����O, ���� ��Ű��O
	//private: ���� Ŭ����O
	
	//�������
	private int speed;
	
	//������
	//Ŭ������� �����ؾ���.
	public Car(int speed) {
		this.speed = speed;
	}
	
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
		//��ȿ�� �˻�
		if(speed > 0) {
		this.speed = speed;
		}
		
	}
	
	//�ߺ� ������ ���� �޼ҵ�
	public void increaseSpeed(int speed) {
		this.speed = this.speed + 100;
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
