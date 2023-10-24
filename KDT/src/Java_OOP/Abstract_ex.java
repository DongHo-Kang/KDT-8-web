package Java_OOP;

//�߻� Ŭ����
abstract class Animals {
	//�߻� �޼���: ���� Ŭ�������� �����ؾ��ϴ� �޼���
	//Aniaml�� ��ӹ޴� Ŭ�����鿡�� sound�� �׻� ���� �Ѵ�.
	abstract public void sound();
	
	public void sleep() {
		System.out.println("������ ���� �ܴ�.");
	}
}

//�߻�Ŭ���� Animals�� ��ӹ޴� DogŬ����
class Chicken extends Animals{
	
	//�ʼ� �κ� �ֱ�(sound);
	@Override
	public void sound() {
		System.out.println("������");
	}
}

public class Abstract_ex {
	public static void main(String[] args) {
	//�߻� Ŭ������ �ν��Ͻ��� �Ҵ� �Ұ�.
	//	Animals ani = new Animals();	
	
		
	Chicken chicken = new Chicken();
	
	chicken.sound();
	chicken.sleep();
	}
}
