import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { ProductlistingpageComponent } from './pages/productlistingpage/productlistingpage.component';
import { ListedproductComponent } from './pages/productlistingpage/listedproduct/listedproduct.component';
import { CategorypageComponent } from './pages/categorypage/categorypage.component';
import { RegisterComponent } from './auth/register/register.component';
import { protectGardGuard } from './auth/protect-gard.guard';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SellerloginComponent } from './auth/seller_login/sellerlogin/sellerlogin.component';
import { SellerregisterComponent } from './auth/seller_register~/sellerregister/sellerregister.component';
import { SellerhomeComponent } from './sellerHome/sellerhome/sellerhome.component';
import { OrderComponent } from './sellerHome/order/order.component';

export const routes: Routes = [
    { path: "", component: NavbarComponent },
    { path: "authlogin", component: LoginComponent },
    { path: "sellerlogin", component: SellerloginComponent },
    { path: "seller_register", component: SellerregisterComponent },
    {
        path: "sellerhome", component: SellerhomeComponent,canActivate:[protectGardGuard],
        children: [
            { path: "productlistingpage", component: ProductlistingpageComponent },
            { path: "order", component: OrderComponent },
        ]
    },
    {
        path: "home", component: HomeComponent,canActivate:[protectGardGuard],
        children: [
            { path: "productlistingpage", component: ProductlistingpageComponent },
            { path: "categorypage", component: CategorypageComponent },
            { path: "register", component: RegisterComponent }
        ]
    }

];
