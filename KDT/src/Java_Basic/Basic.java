package Java_Basic;
import java.math.BigDecimal;

public class Basic {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		BigDecimal a = new BigDecimal("0.02");
		BigDecimal b = new BigDecimal("0.05");
		
		BigDecimal sum = a.add(b); //µ¡¼À
		BigDecimal diff = a.subtract(b); //»¬¼À
		BigDecimal multi = a.multiply(b); //°ö¼À
		BigDecimal divi = a.divide(b); //³ª´°¼À		
		
		System.out.println(sum);
		System.out.println(diff);
		System.out.println(multi);
		System.out.println(divi);
		
	}

}
