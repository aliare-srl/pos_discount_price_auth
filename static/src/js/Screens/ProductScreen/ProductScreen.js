odoo.define('pos_discount_price_auth.ProductScreen', function (require) {
"use strict";

    var ProductScreen = require('point_of_sale.ProductScreen');
    const Registries = require('point_of_sale.Registries');

    const PosdiscountPriceProductScreen = ProductScreen => class extends ProductScreen {
        _setValue(val) {
            if (this.currentOrder.get_selected_orderline()) {

                if (this.state.numpadMode === 'discount'){

                    var partner_auth_id = this.env.pos.config.partner_auth_id
                    if (partner_auth_id){
                        if (this.env.pos.user.id != partner_auth_id[0]){
                          this.showPopup('ErrorPopup', {
                              title: this.env._t('Error en permisos'),
                              body: this.env._t('No tiene permisos para aplicar descuentos.'),
                          });
                        }else{

                            super._setValue();
                        }

                    }

                } else if (this.state.numpadMode === 'price'){

                  var partner_auth_id = this.env.pos.config.partner_auth_id
                  if (partner_auth_id){
                      if (this.env.pos.user.id != partner_auth_id[0]){
                        this.showPopup('ErrorPopup', {
                            title: this.env._t('Error en permisos'),
                            body: this.env._t('No tiene permisos para aplicar precios.'),
                        });
                      }else{

                          super._setValue();
                      }

                  }
                }

                super._setValue();


            }
        }
    };

    Registries.Component.extend(ProductScreen, PosdiscountPriceProductScreen);

});
