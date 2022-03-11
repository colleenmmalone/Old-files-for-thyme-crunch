package com.thymecrunch.recApp.shoppinglist;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;
// import java.util.Objects;

@Component
@Entity
@Table(name="shoppingList")
public class ShoppingList {
	
	@Id

	@GeneratedValue(
			strategy = GenerationType.IDENTITY
			)

	@Column(name="listID")
	private Integer listID;
	
	@Column(name= "username")
	private String username;

	@Column(name= "ingredient_name")
	private String ingredientName;
	

	public ShoppingList() {
		super();
	}
	

	public ShoppingList(String username, String ingredientName) {
		super();
		this.username = username;
		this.ingredientName = ingredientName;
	}


	public ShoppingList(Integer listID, String ingredientName, String username) {
		super();
		this.listID = listID;
		this.ingredientName = ingredientName;
		this.username = username;
	}

	@Override
	public String toString() {
		return "ShoppingList [recID=" + listID + ", ingredientName=" + ingredientName + ", username=" + username + "]";
	}

	public Integer getRecID() {
		return listID;
	}

	public void setRecID(Integer recID) {
		this.listID = recID;
	}

	public String getIngredientName() {
		return ingredientName;
	}

	public void setIngredientName(String ingredientName) {
		this.ingredientName = ingredientName;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
 
	
	

}
