package Java_Basic;

public class Practice_method2_231020 {

	
	public static double calc(double radius) {
		return radius * radius * Math.PI;
	}
	
	public static double calc(double width, double length) {
		return width * length;
	}
	
	public static double calc(double base, double length, double c) {
		return base * length * c;
	}
	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.printf("�������� %d�� ���� ����: %f",5 ,calc(5)).println();
		System.out.printf("���� %d, ���� %d�� ���簢���� ����: %f", 4, 7, calc(4,7)).println();
		System.out.printf("�غ� %d, ���� %d�� �ﰢ���� ����: %f", 6, 3, calc(6,3,0.5)).println();;

	}

}
