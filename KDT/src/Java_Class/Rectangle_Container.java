package Java_Class;

import java.util.ArrayList;
import java.util.Scanner;

public class Rectangle_Container {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Rectangle Area = new Rectangle();
		
		Scanner s = new Scanner(System.in);
		
		ArrayList<Rectangle> rect = new ArrayList<>();
		
		while(true) {
		System.out.println("�簢���� ���ο� ���� ���̸� ���⸦ �������� �Է����ּ���.");
		int width = s.nextInt();
		int heith = s.nextInt();
		if(width == 0 & heith == 0) {
			break;
		}else {
			Rectangle newRect = new Rectangle();
			newRect.setHeight(width);
			newRect.setWidth(heith);
			rect.add(newRect);
		}
		}
		
		
		System.out.println("�簢�� ���:");
        for (Rectangle r : rect) {
            int area = r.calculateArea();
            System.out.println("����: " + r.getWidth() + ", ����: " + r.getHeight() + ", ����: " + area);
        }
		
	}

}
