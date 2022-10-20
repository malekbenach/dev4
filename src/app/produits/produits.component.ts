import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent implements OnInit {
  produits : Produit[]; //un tableau de chînes de caractères
  constructor(private produitService: ProduitService ) {
    this.produits = produitService.listeProduits();
    }
  

  ngOnInit(): void {
  }

}
