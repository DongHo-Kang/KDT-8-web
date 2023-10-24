package Java_Class;

//static ���� ���
class WithoutStatic {
	private int registered = 0;
	private String name;
	
	public WithoutStatic(String name) {
		this.name =name;
		registered++;
	}
	
	public int getRegistered() {
		return registered;
	}
}

//static �ִ� ���
class WithStatic{
	private String name;
	private static int registered = 0;
	
	public WithStatic(String name) {
		this.name = name;
		registered++;
		
	}
	
	public int getRegistered() {
		return registered;
	}
}

//static �޼ҵ�
class MathUtil{
	private static double PI = 3.14;
	
	//static �޼ҵ�
	public static double circle(double radius) {
		return PI * radius * radius;
	}
	
}

public class CompareStatic {

	public static void main(String[] args) {
		
		double circle = MathUtil.circle(4.3);
		System.out.println(circle);
		
		//static ���� ���
		WithoutStatic a = new WithoutStatic("ȫ�浿");
		WithoutStatic b = new WithoutStatic("�̸���");
		System.out.println("Without Static");
		System.out.println("ȫ�浿: "+ a.getRegistered());
		System.out.println("�̸���: "+ b.getRegistered());
		
		//static �ִ� ���
		WithStatic c = new WithStatic("������");
		WithStatic d = new WithStatic("�Ӳ���");
		System.out.println("With Static");
		System.out.println("������: "+ c.getRegistered());
		System.out.println("�Ӳ���: "+ d.getRegistered());

	}

}
