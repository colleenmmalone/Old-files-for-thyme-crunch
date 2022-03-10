package com.thymecrunch.recApp.shoppinglist;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// import com.thymecrunch.recApp.recipes.Recipe;


@Repository
@Transactional()
public interface ShoppingListRepository extends JpaRepository<ShoppingList, Integer> {
	List<ShoppingList> findByUsername(String username); 
		
}
