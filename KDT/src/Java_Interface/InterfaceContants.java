package Java_Interface;

interface Constants {
	
	
	//final 키워드 
	//클래스에서 사용: 상속될 수 없다. final class MyClass{}
	//메소드에서 사용: 오버라이드될 수 없다. 
	//변수에서 사용: 상수가 됨. 값 변경 불가능.
	//매개변수에서 사용: 매개변수 값 변경 불가능. void Func(final int x){}
	
	//public final이 생략되었음.
	int MAX_VALUE =100;
	double PI = 3.14;
	
}

class ConstantsEx implements Constants{
	//final을 사용함으로써 상수가 됨.
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
