package com.thymecrunch.recApp.shoppinglist;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// import com.thymecrunch.recApp.ingredients.Ingredient;
// import com.thymecrunch.recApp.ingredients.IngredientService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class ShoppingListController {
	
	ShoppingListRepository shoppingListRepository;
	
	@Autowired
	public ShoppingListController(ShoppingListRepository shoppingListRepository) {
		
		this.shoppingListRepository = shoppingListRepository;
	}
	
	@GetMapping("/shoppinglist/{username}")
	public List<ShoppingList> getShoppingList( @PathVariable String username){
		List<ShoppingList> shoppinglist = shoppingListRepository.findByUsername(username);
		return shoppinglist;
	}
	
}
