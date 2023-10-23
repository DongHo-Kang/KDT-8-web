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
		System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력해주세요.");
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
		
		
		System.out.println("사각형 목록:");
        for (Rectangle r : rect) {
            int area = r.calculateArea();
            System.out.println("가로: " + r.getWidth() + ", 세로: " + r.getHeight() + ", 넓이: " + area);
        }
		
	}

}
