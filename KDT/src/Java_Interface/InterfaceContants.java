package Java_Interface;

interface Constants {
	
	
	//final Ű���� 
	//Ŭ�������� ���: ��ӵ� �� ����. final class MyClass{}
	//�޼ҵ忡�� ���: �������̵�� �� ����. 
	//�������� ���: ����� ��. �� ���� �Ұ���.
	//�Ű��������� ���: �Ű����� �� ���� �Ұ���. void Func(final int x){}
	
	//public final�� �����Ǿ���.
	int MAX_VALUE =100;
	double PI = 3.14;
	
}

class ConstantsEx implements Constants{
	//final�� ��������ν� ����� ��.
//	public final int max = 100;
	void display() {
		System.out.println("MAX value: " + MAX_VALUE);
		System.out.println("PI: "+ PI);
	}
}

public class InterfaceContants {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ConstantsEx obj = new ConstantsEx();
		obj.display();

	}

}
