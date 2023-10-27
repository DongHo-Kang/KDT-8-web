package Java_Generic;
import java.util.*;

public class Collection {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//LikedList
		List<String> linkedList = new LinkedList<>();
		linkedList.add("A");
		linkedList.add("B");
		//�ε�����ȣ1�� C �ֱ�
		linkedList.add(1, "C");
		System.out.println("linkedList: " + linkedList);
		
		//HashSet
		//�ߺ��� ����
		Set<String> hashSet = new HashSet<>();
		hashSet.add("A");
		hashSet.add("B");
		hashSet.add("A");
		System.out.println("hashSet: " + hashSet);
		
		//LinkedHashSet
		//���� ���� ���
		//���� ������� �ݺ�
		Set<String> linkedHashSet = new LinkedHashSet<>();
		linkedHashSet.add("C");
		linkedHashSet.add("B");
		linkedHashSet.add("A");
		System.out.println("linkedHashSet: " +linkedHashSet);
		
		//TreeSet
		//�ڵ����� ����
		Set<String> treeSet = new TreeSet<>();
		treeSet.add("B");
		treeSet.add("C");
		treeSet.add("A");
		System.out.println("treeSet: "+ treeSet);
		
		//HashMap
		Map<String, Integer> hashMap = new HashMap<>();
		hashMap.put("One", 1);
		hashMap.put("Two", 2);
		hashMap.put("Three", 3);
		System.out.println("hashMap: "+ hashMap);
		
		//LinkedHashMap
		Map<String, Integer> list = new LinkedHashMap<>();
		list.put("three", 3);
		list.put("one", 1);
		list.put("two", 2);
		System.out.println("LinkedHashMap: "+list);
		//TreeMap
		Map<String, Integer> treeMap = new TreeMap<>();
		treeMap.put("C", 3);
		treeMap.put("A", 1);
		treeMap.put("B", 2);
		System.out.println("treeMap: "+treeMap);
	}

}
