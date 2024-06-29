import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FormComponent } from '../../shared/components/form/form.component';
import { Product } from '../../shared/interfaces/product.interface';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})


export class EditComponent {

  productsService = inject(ProductsService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);
  
  product: Product = inject(ActivatedRoute).snapshot.data['product'];

  onSubmit(product: Product){
    this.productsService.put(this.product.id, product).subscribe(() => {
      this.matSnackBar.open('Editado com sucesso!', 'OK');
      this.router.navigateByUrl('/');
    });

    
  }
}