package Java_Class;

//static ¾ø´Â °æ¿ì
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

//static ÀÖ´Â °æ¿ì
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

//static ¸Þ¼Òµå
class MathUtil{
	private static double PI = 3.14;
	
	//static ¸Þ¼Òµå
	public static double circle(double radius) {
		return PI * radius * radius;
	}
	
}

public class CompareStatic {

	public static void main(String[] args) {
		
		double circle = MathUtil.circle(4.3);
		System.out.println(circle);
		
		//static ¾ø´Â °æ¿ì
		WithoutStatic a = new WithoutStatic("È«±æµ¿");
		WithoutStatic b = new WithoutStatic("ÀÌ¸ù·æ");
		System.out.println("Without Static");
		System.out.println("È«±æµ¿: "+ a.getRegistered());
		System.out.println("ÀÌ¸ù·æ: "+ b.getRegistered());
		
		//static ÀÖ´Â °æ¿ì
		WithStatic c = new WithStatic("¼ºÃáÇâ");
		WithStatic d = new WithStatic("ÀÓ²©Á¤");
		System.out.println("With Static");
		System.out.println("¼ºÃáÇâ: "+ c.getRegistered());
		System.out.println("ÀÓ²©Á¤: "+ d.getRegistered());

	}

}
