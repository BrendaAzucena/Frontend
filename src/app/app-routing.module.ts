import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full'
  },

  {
    path: 'principal',
    loadChildren: () => import('./componentes/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'cliente',
    children:[
      {
        path: '',
        loadChildren: () => import('./componentes/cliente/cliente.module').then( m => m.ClientePageModule)
      },
      {
        path: ':clienteId',
        loadChildren: () => import('./componentes/e/e.module').then( m => m.EPageModule)
      }
    ]
  
  },
  {
    path: 'a',
    loadChildren: () => import('./componentes/a/a.module').then( m => m.APageModule)
  },
  {
    path: 'proveedor',
    children:[
      {
        path: '',
        loadChildren: () => import('./componentes/proveedor/proveedor.module').then( m => m.ProveedorPageModule)
      },
      {
        path: ':proveedorId',
        loadChildren: () => import('./componentes/proveedor/proveedorId/prove-id/prove-id.module').then( m => m.ProveIdPageModule)
      }
    ]
   
  },

  {
    path: 'venta',
    children:[
      {
        path: '',
        loadChildren: () => import('./componentes/venta/venta.module').then( m => m.VentaPageModule)
      },
      {
        path: ':ventaId',
        loadChildren: () => import('./componentes/venta/ventaId/vent-id/vent-id.module').then( m => m.VentIdPageModule)
      }
    ]
    
  },

  {
    path: 'producto',
    children:[
      {
        path: '',
        loadChildren: () => import('./componentes/producto/producto.module').then( m => m.ProductoPageModule)
      },
      {
        path: ':productoId',
        loadChildren: () => import('./componentes/producto/productoId/pro-id/pro-id.module').then( m => m.ProIdPageModule)
      }
    ]
      
  },
  {
    path: 'factura',
    children:[
      {
        path: '',
        loadChildren: () => import('./componentes/factura/factura.module').then( m => m.FacturaPageModule)
      },
      {
        path: ':facturaId',
        loadChildren: () => import('./componentes/factura/facturaId/fad-id/fad-id.module').then( m => m.FadIdPageModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./componentes/putfactura/putfactura.module').then( m => m.PutfacturaPageModule)
      },

    ]
    
  },
  {
    path: 'e',
    loadChildren: () => import('./componentes/e/e.module').then( m => m.EPageModule)
  },
  {
    path: 'proveedorpost',
    loadChildren: () => import('./componentes/proveedorpost/proveedorpost.module').then( m => m.ProveedorpostPageModule)
  },
  {
    path: 'productopost',
    loadChildren: () => import('./componentes/productopost/productopost.module').then( m => m.ProductopostPageModule)
  },
  {
    path: 'ventapost',
    loadChildren: () => import('./componentes/ventapost/ventapost.module').then( m => m.VentapostPageModule)
  },
  {
    path: 'facturapost',
    loadChildren: () => import('./componentes/facturapost/facturapost.module').then( m => m.FacturapostPageModule)
  },
  {
    path: 'putcliente/:Id',
    loadChildren: () => import('./componentes/putcliente/putcliente.module').then( m => m.PutclientePageModule)
  },
  {
    path: 'putproducto/:Id',
    loadChildren: () => import('./componentes/putproducto/putproducto.module').then( m => m.PutproductoPageModule)
  },
  {
    path: 'putproveedor/:Id',
    loadChildren: () => import('./componentes/putproveedor/putproveedor.module').then( m => m.PutproveedorPageModule)
  },
  {
    path: 'putventa/:Id',
    loadChildren: () => import('./componentes/putventa/putventa.module').then( m => m.PutventaPageModule)
  },
  {
    path: 'putfactura/:Id',
    loadChildren: () => import('./componentes/putfactura/putfactura.module').then( m => m.PutfacturaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
