import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProductService } from './../../shared/product.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  productForm: FormGroup;
  result;
  selectedImage: File;

  constructor(private fb: FormBuilder, private prod: ProductService ,  private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      title: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required)
    });
  }


  addProduct() {
    // console.log('Products:: ' + JSON.stringify(this.productForm.get('productImage').value));
    const formData = new FormData();
    for (const key of Object.keys(this.productForm.value)) {
       const val = this.productForm.value[key];
       formData.append(key, val);
     }
    // formData.append('image', this.selectedImage, this.selectedImage.name);
    this.prod.addProductAPI(formData)
               .subscribe(res => this.result = res.body, err => console.log('product upload error') );
  }

   onFileSelect(event) {
     if (event.target.files.length > 0) {
       this.productForm.get('image').setValue(event.target.files[0]);
      // this.selectedImage = event.target.files[0];
     }
   }

}
